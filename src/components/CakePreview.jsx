const FROSTING_COLORS = {
  pink: "var(--pink)",
  yellow: "var(--yellow)",
  mint: "var(--mint)",
  lilac: "var(--lilac)",
};
const CANDLE_COLORS = {
  pink: "var(--pink)",
  yellow: "var(--yellow)",
  mint: "var(--mint)",
  lilac: "var(--lilac)",
};

export default function CakePreview({ design, lit, onClick }) {
  const Wrapper = onClick ? "button" : "div";
  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      className="cake-wrap"
      onClick={onClick}
      aria-label={onClick ? "Light the candle" : undefined}
    >
      <div
        className={`cake-base shape-${design.shape}`}
        style={{ background: FROSTING_COLORS[design.frosting] }}
      >
        <div className="cake-frosting" />
        {design.topping === "sprinkles" && (
          <div className="sprinkles">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        )}
        {design.topping === "cherry" && <div className="cherry" />}
        {design.topping === "drizzle" && <div className="drizzle" />}
        <div
          className="candle"
          style={{
            background: `repeating-linear-gradient(45deg, ${CANDLE_COLORS[design.candleColor]} 0 6px, var(--paper) 6px 12px)`,
          }}
        >
          <div className="wick" />
          <div className={`flame ${lit ? "lit" : ""}`} />
        </div>
      </div>
    </Wrapper>
  );
}
