import { useState } from "react";
import emailjs from "@emailjs/browser";
import { content } from "../content";

export default function WishForm({ onNext }) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus("sending");
    try {
      await emailjs.send(
        content.emailjs.serviceId,
        content.emailjs.templateId,
        { message, from_name: "Kirti" },
        content.emailjs.publicKey,
      );
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="stage wish-stage">
        <div className="eyebrow">Sent!</div>
        <h2>thank you 💌</h2>
        <p className="wish-sent-text">Your Wish is on its Way .</p>
        <button type="button" className="continue-btn" onClick={onNext}>
          Continue →
        </button>
      </div>
    );
  }

  return (
    <div className="stage wish-stage">
      <div className="section-head">
        <div className="eyebrow">Your Turn</div>
        <h2>Make a Wish, Out Loud This Time</h2>
      </div>
      <form className="wish-form" onSubmit={handleSubmit}>
        <textarea
          className="wish-textarea"
          placeholder="write whatever you're feeling right now..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        />
        <button
          type="submit"
          className="continue-btn"
          disabled={status === "sending"}
        >
          {status === "sending" ? "sending..." : "send it💌"}
        </button>
        {status === "error" && (
          <p className="wish-error">something went wrong — try again?</p>
        )}
      </form>
    </div>
  );
}
