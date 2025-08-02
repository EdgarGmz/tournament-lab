// Section helper component for DRY
function SectionCard({ id, title, children, image, imageAlt, imageClass, alt, center, className }) {
  return (
    <section
      id={id}
      className={[
        "section",
        alt ? "section-alt" : "",
        center ? "center" : "",
        className || ""
      ].join(" ").trim()}
    >
      <div className={center ? "container single center" : "container" + (alt ? " single" : "")}>
        <div className="text">
          {title && <h2>{title}</h2>}
          {children}
        </div>
        {image && (
          <div className="image">
            <img src={image} alt={imageAlt} className={imageClass} />
          </div>
        )}
      </div>
    </section>
  );
}

export default SectionCard;