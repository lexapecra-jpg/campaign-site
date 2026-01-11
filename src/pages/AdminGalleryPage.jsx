// src/pages/AdminGalleryPage.jsx
import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";

import { SectionTitle } from "../components/SectionTitle";

const safeSlug = (s = "") =>
  s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-_]/g, "");

export default function AdminGalleryPage({ gallery }) {
  const g = gallery || {
    page_title: "Admin Gallery",
    page_subtitle: "UPLOADS • DRAFTS • PUBLISHING",
    upload_help_title: "Upload & Manage Gallery",
    upload_help_steps: [
      "Login first (email/password).",
      "Upload an image, add title/caption/category/year.",
      "Toggle Published to show on public Gallery."
    ],
    categories: ["All", "Diplomacy", "Field", "Events", "Media"],
    items: []
  };

  // --- Auth ---
  const [session, setSession] = useState(null);
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  // --- Data ---
  const [remoteItems, setRemoteItems] = useState([]);
  const [remoteLoading, setRemoteLoading] = useState(true);
  const [remoteError, setRemoteError] = useState("");

  // const [activeCategory, setActiveCategory] = useState("All"); // Removed
  const [showUploadPanel, setShowUploadPanel] = useState(false);

  // --- Upload form ---
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("Media");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadOk, setUploadOk] = useState("");

  const previewUrl = useMemo(() => (file ? URL.createObjectURL(file) : ""), [file]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  // Init session + subscribe
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (!supabase) {
        if (!mounted) return;
        setAuthError(
          "Supabase env missing: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local then restart Vite."
        );
        setRemoteLoading(false);
        return;
      }

      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      setSession(data.session || null);
    };

    init();

    if (!supabase) return;

    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess || null);
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  const signIn = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");

    try {
      if (!supabase) throw new Error("Supabase client not configured.");
      const { data, error } = await supabase.auth.signInWithPassword({
        email: authEmail,
        password: authPassword
      });
      if (error) throw error;
      setSession(data.session);
    } catch (err) {
      setAuthError(err?.message || "Login failed");
    } finally {
      setAuthLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await supabase?.auth.signOut();
    } catch {
      // ignore
    }
  };

  const loadItems = async () => {
    setRemoteLoading(true);
    setRemoteError("");

    try {
      if (!supabase) throw new Error("Supabase client not configured.");

      const { data, error } = await supabase
        .from("gallery_items")
        .select("id,title,caption,category,year,image_url,storage_path,published,created_at")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRemoteItems(data || []);
    } catch (e) {
      setRemoteError(e?.message || "Failed to load gallery");
      setRemoteItems([]);
    } finally {
      setRemoteLoading(false);
    }
  };

  useEffect(() => {
    if (!supabase) return;

    if (!session) {
      setRemoteItems([]);
      setRemoteLoading(false);
      return;
    }
    loadItems();
  }, [session]);

  const items = useMemo(() => (session ? remoteItems : []), [session, remoteItems]);

  const filteredItems = useMemo(() => {
    return items;
  }, [items]);

  const doUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    setUploadError("");
    setUploadOk("");

    try {
      if (!supabase) throw new Error("Supabase client not configured.");
      if (!session) throw new Error("Please login first.");
      if (!file) throw new Error("Select an image file.");
      if (!title.trim()) throw new Error("Title is required.");

      const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
      const random = Math.random().toString(36).slice(2);
      const path = `uploads/${Date.now()}-${safeSlug(title).slice(0, 40) || "image"}-${random}.${ext}`;

      const { error: upErr } = await supabase.storage
        .from("gallery")
        .upload(path, file, { upsert: false, contentType: file.type });

      if (upErr) throw upErr;

      const { data: pub } = supabase.storage.from("gallery").getPublicUrl(path);
      const publicUrl = pub?.publicUrl;
      if (!publicUrl) throw new Error("Failed to generate public URL.");

      const { error: insErr } = await supabase.from("gallery_items").insert({
        title: title.trim(),
        caption: caption.trim(),
        category: category || "Media",
        year: year?.trim() || null,
        image_url: publicUrl,
        storage_path: path,
        published: true
      });

      if (insErr) throw insErr;

      setUploadOk("Uploaded & Published successfully.");
      setFile(null);
      setTitle("");
      setCaption("");
      setCategory("Media");
      setYear(new Date().getFullYear().toString());
      await loadItems();
    } catch (err) {
      setUploadError(err?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const togglePublished = async (it) => {
    try {
      const { error } = await supabase
        .from("gallery_items")
        .update({ published: !it.published })
        .eq("id", it.id);
      if (error) throw error;
      await loadItems();
    } catch (e) {
      alert(e?.message || "Failed to update");
    }
  };

  const deleteItem = async (it) => {
    const ok = window.confirm("Delete this item? This will remove the image and DB record.");
    if (!ok) return;

    try {
      const { error: delErr } = await supabase.from("gallery_items").delete().eq("id", it.id);
      if (delErr) throw delErr;

      if (it.storage_path) {
        const { error: stoErr } = await supabase.storage.from("gallery").remove([it.storage_path]);
        if (stoErr) throw stoErr;
      }

      await loadItems();
    } catch (e) {
      alert(e?.message || "Delete failed");
    }
  };

  if (!supabase) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-[#F4F7F6]">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionTitle>Admin Gallery</SectionTitle>
          <p className="mt-4 text-gray-700">
            Missing Supabase env. Add <span className="font-mono">VITE_SUPABASE_URL</span> and{" "}
            <span className="font-mono">VITE_SUPABASE_ANON_KEY</span> to{" "}
            <span className="font-mono">.env.local</span> then restart Vite.
          </p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-[#F4F7F6]">
        <div className="container mx-auto px-6 max-w-md">
          <div className="text-center mb-10">
            <SectionTitle>Admin Login</SectionTitle>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to manage gallery uploads and publishing.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-8">
            <form className="space-y-4" onSubmit={signIn}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Email
                </label>
                <input
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  type="email"
                  required
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#C5A059]"
                  placeholder="admin@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Password
                </label>
                <input
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  type="password"
                  required
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#C5A059]"
                  placeholder="••••••••"
                />
              </div>

              {authError ? (
                <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
                  {authError}
                </div>
              ) : null}

              <button
                disabled={authLoading}
                className="w-full bg-[#013220] text-white py-3.5 font-bold rounded-xl hover:opacity-95 transition uppercase tracking-widest text-xs"
              >
                {authLoading ? "Signing in…" : "Sign in"}
              </button>

              <div className="text-xs text-gray-500 leading-relaxed">
                If you don’t have a user yet: Supabase Dashboard → Authentication → Users → Add user.
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-[#F4F7F6] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle>{g.page_title}</SectionTitle>
          <p className="text-[#C5A059] font-bold uppercase tracking-widest text-sm">
            {g.page_subtitle}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-xs text-gray-600">Signed in as</span>
            <span className="text-xs font-bold text-[#013220]">{session?.user?.email}</span>
            <button
              type="button"
              onClick={signOut}
              className="ml-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#013220]/15 hover:border-[#C5A059] hover:text-[#C5A059] transition"
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Upload Accordion */}
        <section className="mb-14 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
            <button
              type="button"
              onClick={() => setShowUploadPanel((v) => !v)}
              className="w-full px-8 py-6 flex justify-between items-center"
            >
              <div className="text-left">
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                  Admin / Upload
                </div>
                <h3 className="text-xl font-extrabold text-[#013220] mt-2">
                  {g.upload_help_title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full border flex items-center justify-center text-xl">
                {showUploadPanel ? "–" : "+"}
              </div>
            </button>

            {showUploadPanel ? (
              <div className="px-8 pb-10">
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  {g.upload_help_steps.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>

                <form onSubmit={doUpload} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                      Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFile((e.target.files || [])[0] || null)}
                      className="block w-full text-sm text-gray-700 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-widest file:bg-[#013220] file:text-white hover:file:bg-[#0E2A1F] cursor-pointer"
                    />

                    {previewUrl ? (
                      <div className="mt-4 rounded-xl overflow-hidden border border-black/5 bg-white">
                        <img src={previewUrl} alt="preview" className="h-48 w-full object-cover" />
                        <div className="p-3 text-[11px] uppercase tracking-widest text-gray-600 truncate">
                          {file?.name}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="md:col-span-7">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                        Title
                      </label>
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#C5A059]"
                        placeholder="e.g., Diplomatic Engagement"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                        Caption
                      </label>
                      <textarea
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        rows={4}
                        className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#C5A059]"
                        placeholder="Keep it factual: event / location / date."
                      />
                    </div>

                    {uploadError ? (
                      <div className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
                        {uploadError}
                      </div>
                    ) : null}

                    {uploadOk ? (
                      <div className="mt-4 text-sm text-green-800 bg-green-50 border border-green-200 rounded-xl p-3">
                        {uploadOk}
                      </div>
                    ) : null}

                    <div className="mt-5 flex items-center gap-3">
                      <button
                        disabled={uploading}
                        className="bg-[#013220] text-white py-3 px-6 font-bold rounded-xl hover:opacity-95 transition uppercase tracking-widest text-xs"
                      >
                        {uploading ? "Uploading…" : "Upload & Publish"}
                      </button>
                      <button
                        type="button"
                        onClick={loadItems}
                        className="py-3 px-6 font-bold rounded-xl border border-[#013220]/15 hover:border-[#C5A059] hover:text-[#C5A059] transition uppercase tracking-widest text-xs"
                      >
                        Refresh
                      </button>
                    </div>

                    <div className="mt-3 text-xs text-gray-500">
                      New uploads are <b>published</b> automatically. You can unpublish them below.
                    </div>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
        </section>

        {/* Items */}
        <div className="max-w-6xl mx-auto">
          {
            remoteError ? (
              <div className="mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3" >
                {remoteError}
              </div>
            ) : null
          }

          {
            remoteLoading ? (
              <div className="text-center text-gray-600 py-10">Loading gallery…</div>
            ) : filteredItems.length === 0 ? (
              <div className="text-center text-gray-600 py-10">No items yet.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((it) => (
                  <div
                    key={it.id}
                    className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition border border-black/5"
                  >
                    <img src={it.image_url} alt={it.title} className="h-56 w-full object-cover" loading="lazy" />
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-[#013220] truncate">{it.title}</h4>
                        </div>

                        <span
                          className={`text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${it.published
                            ? "bg-green-50 text-green-800 border-green-200"
                            : "bg-amber-50 text-amber-800 border-amber-200"
                            }`}
                        >
                          {it.published ? "Published" : "Draft"}
                        </span>
                      </div>

                      {it.caption ? (
                        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                          {it.caption}
                        </p>
                      ) : null}

                      <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => togglePublished(it)}
                          className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#013220]/15 hover:border-[#C5A059] hover:text-[#C5A059] transition"
                        >
                          {it.published ? "Unpublish" : "Publish"}
                        </button>

                        <button
                          type="button"
                          onClick={() => deleteItem(it)}
                          className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-red-200 text-red-700 hover:bg-red-50 transition"
                        >
                          Delete
                        </button>
                      </div>

                      <div className="mt-3 text-[11px] text-gray-400">
                        {it.created_at ? new Date(it.created_at).toLocaleString() : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          }
        </div >

      </div >
    </div >
  );
}