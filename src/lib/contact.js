import { supabase } from "./supabase";

/**
 * Sends a contact message to the Supabase database.
 * @param {Object} formData - The form data to send.
 * @param {string} formData.full_name
 * @param {string} formData.institution
 * @param {string} formData.email
 * @param {string} formData.interest_type
 * @param {string} formData.consultation_channel
 * @param {string} formData.message
 * @returns {Promise<{error: any, data: any}>}
 */
export const sendMessage = async (formData) => {
    if (!supabase) {
        return { error: { message: "Supabase client not initialized" } };
    }

    const { data, error } = await supabase
        .from("contact_messages")
        .insert([
            {
                full_name: formData.full_name,
                institution: formData.institution,
                email: formData.email,
                interest_type: formData.interest_type,
                consultation_channel: formData.consultation_channel,
                message: formData.message,
            },
        ]);

    return { data, error };
};
