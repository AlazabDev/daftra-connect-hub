# Runtime health page

The console page is available at `/console/health` and calls `/api/system-health`.

It checks runtime configuration and live reachability for Azure Foundry, Azure OpenAI, Azure AI Services, Azure Speech, Azure Translator, Azure model deployment names, Azure agent names, Ollama, Ollama OpenAI-compatible API, and Open WebUI.

No secret values are returned to the browser. The UI only receives whether a variable is present, endpoint host/path, HTTP status, latency, and a short status message.
