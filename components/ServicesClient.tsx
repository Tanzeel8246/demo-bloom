"use client";

import { useState } from "react";
import { SERVICE_CATEGORIES, FAQS, SITE, waLink } from "@/lib/site";
import { ChevronDown, ClockIcon } from "@/components/icons";

function ServiceAccordion() {
  const [openId, setOpenId] = useState<string | null>(SERVICE_CATEGORIES[0].id);

  return (
    <div className="accordion">
      {SERVICE_CATEGORIES.map((c, i) => {
        const open = openId === c.id;
        return (
          <div key={c.id} className={`acc-item ${open ? "open" : ""}`}>
            <button
              type="button"
              className="acc-head"
              onClick={() => setOpenId(open ? null : c.id)}
              aria-expanded={open}
              aria-controls={`acc-body-${c.id}`}
            >
              <span className="acc-num">{String(i + 1).padStart(2, "0")}</span>
              {c.title}
              <span className="acc-chevron" aria-hidden="true">
                <ChevronDown />
              </span>
            </button>
            <div
              className="acc-body"
              id={`acc-body-${c.id}`}
              role="region"
              aria-label={`${c.title} services`}
            >
              <div className="acc-body-inner">
                <p className="acc-blurb">{c.blurb}</p>
                <div style={{ padding: "14px 0 10px" }}>
                  {c.items.map((s) => (
                    <div key={s.name} className="service-row">
                      <div className="s-info">
                        <div className="s-name">{s.name}</div>
                        <div className="s-meta">
                          <span>
                            <ClockIcon />
                            {s.duration}
                          </span>
                          {s.note && <span>{s.note}</span>}
                        </div>
                      </div>
                      <div className="s-price">Rs {s.price.toLocaleString("en-PK")}</div>
                      <a
                        className="s-book"
                        href={waLink(`Assalam-o-Alaikum! I'd like to book "${s.name}" (Rs ${s.price.toLocaleString("en-PK")}) at ${SITE.name}.`)}
                        target="_blank"
                        rel="noopener"
                      >
                        Book this
                      </a>
                    </div>
                  ))}
                </div>
                <div className="acc-foot">
                  <a
                    className="btn btn-outline btn-sm"
                    href={`/booking/#${c.id}`}
                  >
                    Book {c.title.toLowerCase()} online
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FaqList() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="accordion">
      {FAQS.map((f, i) => {
        const open = openIdx === i;
        return (
          <div key={f.q} className={`acc-item ${open ? "open" : ""}`}>
            <button
              type="button"
              className="acc-head"
              style={{ fontFamily: "var(--font-body)", fontSize: "1.08rem", fontWeight: 600 }}
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
            >
              <span className="acc-num">Q{i + 1}</span>
              {f.q}
              <span className="acc-chevron" aria-hidden="true">
                <ChevronDown />
              </span>
            </button>
            <div className="acc-body" role="region" aria-label={f.q}>
              <div className="acc-body-inner">
                <p className="acc-blurb" style={{ paddingBottom: 28 }}>
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


export { ServiceAccordion, FaqList };
