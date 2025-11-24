export default function ChatRoom() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "420px",
          height: "600px",
          background: "white",
          borderRadius: "18px",
          boxShadow: "0 6px 22px rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px",
            background: "#4a60f2",
            color: "white",
            fontSize: "20px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Chat Room
        </div>

        {/* Chat Area */}
        <div
          style={{
            flex: 1,
            padding: "15px",
            overflowY: "auto",
            background: "#fafafa",
          }}
        >
          <div
            style={{
              background: "#4a60f2",
              color: "white",
              padding: "10px 14px",
              borderRadius: "12px",
              maxWidth: "70%",
              marginBottom: "10px",
            }}
          >
            Hey! Welcome to the chat 👋
          </div>

          <div
            style={{
              background: "#e4e4e4",
              padding: "10px 14px",
              borderRadius: "12px",
              maxWidth: "70%",
              alignSelf: "flex-end",
              marginLeft: "auto",
              marginBottom: "10px",
            }}
          >
            Thanks! Happy to be here 😄
          </div>
        </div>

        {/* Input Area */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            padding: "12px",
            borderTop: "1px solid #ddd",
            background: "#fff",
          }}
        >
          <input
            type="text"
            placeholder="Type a message…"
            style={{
              flex: 1,
              padding: "12px 14px",
              fontSize: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />

          <button
            style={{
              padding: "12px 18px",
              background: "#4a60f2",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: 600,
              transition: "0.2s",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
