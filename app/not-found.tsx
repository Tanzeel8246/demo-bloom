import Link from "next/link";
import { Sparkle } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", maxWidth: 640 }}>
        <div
          style={{
            display: "inline-flex",
            width: 84,
            height: 84,
            borderRadius: "50%",
            background: "var(--accent-soft)",
            color: "var(--accent-deep)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
          }}
          aria-hidden="true"
        >
          <Sparkle size={36} />
        </div>
        <div
          className="display"
          style={{ fontSize: "4.6rem", color: "var(--accent-deep)", lineHeight: 1 }}
        >
          404
        </div>
        <h1 style={{ fontSize: "2rem", margin: "14px 0 12px" }}>
          This look is not in our collection
        </h1>
        <p className="lead" style={{ margin: "0 auto 34px" }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist — but a fresh
          glow is only one click away.
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link className="btn btn-rose" href="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" href="/booking/">
            Book an appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
