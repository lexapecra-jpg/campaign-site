import { useEffect, useRef } from "react";
import { CONTENT } from "../data/content";

/**
 * Animated Spectrum Background
 * Renders a Deep Green canvas with subtle Gold sine waves.
 */
export const SpectrumBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let t = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        const draw = () => {
            // Base Deep Green
            ctx.fillStyle = CONTENT.style.primary_green;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Gold Spectrum Lines
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(197, 160, 89, 0.15)'; // Gold low opacity

            const lines = 6;
            for (let i = 0; i < lines; i++) {
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x += 5) {
                    // Complex wave math for "spectrum" look
                    const y = canvas.height / 2 +
                        Math.sin(x * 0.005 + t * 0.01 + i) * 60 +
                        Math.sin(x * 0.01 + t * 0.02) * 20;
                    ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            t += 0.5;
            animationFrameId = window.requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};
