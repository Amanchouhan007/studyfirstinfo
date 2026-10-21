# Assets Directory

Place `scholarship-guide.pdf` in this directory.

When the file is present at `backend/assets/scholarship-guide.pdf`, `POST /api/leads/download-guide` will stream it directly as an attachment.
If missing, the endpoint will safely return a clear JSON response acknowledging receipt and indicating that the guide will be delivered via email/WhatsApp without crashing.
