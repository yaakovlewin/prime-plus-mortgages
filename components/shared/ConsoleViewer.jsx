import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const ConsoleViewer = () => {
  const [logs, setLogs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Store original console methods
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    // Override console methods
    console.log = (...args) => {
      setLogs((prev) => [
        ...prev,
        { type: "log", content: args, timestamp: new Date() },
      ]);
      originalLog.apply(console, args);
    };

    console.warn = (...args) => {
      setLogs((prev) => [
        ...prev,
        { type: "warn", content: args, timestamp: new Date() },
      ]);
      originalWarn.apply(console, args);
    };

    console.error = (...args) => {
      setLogs((prev) => [
        ...prev,
        { type: "error", content: args, timestamp: new Date() },
      ]);
      originalError.apply(console, args);
    };

    // Cleanup
    return () => {
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, []);

  const getLogColor = (type) => {
    switch (type) {
      case "error":
        return "text-red-500";
      case "warn":
        return "text-yellow-500";
      default:
        return "text-green-500";
    }
  };

  const formatLogContent = (content) => {
    return content
      .map((item) =>
        typeof item === "object" ? JSON.stringify(item, null, 2) : String(item),
      )
      .join(" ");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <div className="mb-2 h-96 w-96 overflow-auto rounded-lg bg-gray-900 p-4 text-white shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Console Logs</h3>
            <button
              onClick={() => setLogs([])}
              className="rounded bg-gray-700 px-2 py-1 text-sm hover:bg-gray-600"
            >
              Clear
            </button>
          </div>
          <div className="space-y-2">
            {logs.map((log, index) => (
              <div key={index} className="font-mono text-sm">
                <span className="text-gray-400">
                  {log.timestamp.toLocaleTimeString()}
                </span>
                <span className={`ml-2 ${getLogColor(log.type)}`}>
                  {formatLogContent(log.content)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="rounded-full bg-gray-800 p-2 text-white shadow-lg hover:bg-gray-700"
      >
        <Terminal size={24} />
      </button>
    </div>
  );
};

export default ConsoleViewer;
