import { profile } from "@/lib/data";

export default function WhatsAppButton() {
  if (!profile.whatsapp) return null;

  const message = encodeURIComponent("Hi Rohit, I found your portfolio and would like to talk about a project.");

  return (
    <a
      className="whatsapp-fab"
      href={`https://wa.me/${profile.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.16L2 22l5.1-1.53a9.87 9.87 0 0 0 4.94 1.32h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.06h-.01a8.22 8.22 0 0 1-4.2-1.15l-.3-.18-3.03.91.91-2.95-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.53-6.18c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.24-.63.8-.78.96-.14.16-.29.18-.53.06-1.45-.72-2.4-1.29-3.36-2.93-.25-.44.25-.41.72-1.36.08-.16.04-.3-.03-.43-.08-.12-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.32-.25.25-.94.92-.94 2.24 0 1.32.96 2.6 1.1 2.78.14.18 1.9 2.9 4.62 3.95 2.27.88 2.73.7 3.22.66.5-.05 1.6-.65 1.83-1.29.22-.63.22-1.17.15-1.29-.07-.11-.24-.18-.5-.3Z" />
      </svg>
    </a>
  );
}
