"use client";

import { useMemo, useState } from "react";
import {
  SITE, SERVICE_CATEGORIES, BRIDAL_PACKAGES, TIME_SLOTS, waLink,
} from "@/lib/site";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon, CalendarIcon } from "@/components/icons";

export default function BookingForm() {
  const [category, setCategory] = useState(SERVICE_CATEGORIES[0].id);
  const [service, setService] = useState(SERVICE_CATEGORIES[0].items[0].name);
  const [bridal, setBridal] = useState("none");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(TIME_SLOTS[2]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const isMonday = useMemo(() => {
    if (!date) return false;
    return new Date(`${date}T12:00:00`).getDay() === 1;
  }, [date]);

  const chosen = useMemo(() => {
    const cat = SERVICE_CATEGORIES.find((c) => c.id === category);
    return cat?.items.find((i) => i.name === service);
  }, [category, service]);

  const bridalPkg = BRIDAL_PACKAGES.find((p) => p.name === bridal);

  const valid =
    name.trim().length >= 2 &&
    phone.replace(/\D/g, "").length >= 10 &&
    date !== "" &&
    !isMonday &&
    (service !== "" || bridal !== "none");

  const message = useMemo(() => {
    const lines = [
      "Assalam-o-Alaikum! I'd like to book an appointment at Bloom Salon.",
      "",
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
    ];
    if (service) {
      lines.push(
        `Service: ${service}${chosen ? ` — Rs ${chosen.price.toLocaleString("en-PK")} (${chosen.duration})` : ""}`
      );
    }
    if (bridalPkg) {
      lines.push(`Bridal package: ${bridalPkg.name} — Rs ${bridalPkg.price.toLocaleString("en-PK")}`);
    }
    lines.push(`Preferred date: ${date || "—"}${isMonday ? " (Monday — salon closed)" : ""}`);
    lines.push(`Time slot: ${slot}`);
    lines.push("", "Please confirm my slot. Shukriya!");
    return lines.join("\n");
  }, [name, phone, service, chosen, bridalPkg, date, slot, isMonday]);

  return (
    <>
      <section className="section-sm" style={{ paddingTop: 8 }} aria-label="Booking form">
        <div className="container" style={{ maxWidth: 780 }}>
          <Reveal>
            <form
              className="form-card"
              onSubmit={(e) => {
                e.preventDefault();
                if (!valid) return;
                window.open(waLink(message), "_blank", "noopener");
              }}
            >
              <div className="form-2col">
                <div className="field">
                  <label htmlFor="bk-cat">Service category</label>
                  <select
                    id="bk-cat"
                    value={category}
                    onChange={(e) => {
                      const cat = SERVICE_CATEGORIES.find((c) => c.id === e.target.value)!;
                      setCategory(cat.id);
                      setService(cat.items[0].name);
                    }}
                  >
                    {SERVICE_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="bk-service">
                    Service <span className="req">*</span>
                  </label>
                  <select
                    id="bk-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    {SERVICE_CATEGORIES.find((c) => c.id === category)?.items.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name} — Rs {s.price.toLocaleString("en-PK")}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="bk-bridal">Bridal package (optional)</label>
                <select
                  id="bk-bridal"
                  value={bridal}
                  onChange={(e) => setBridal(e.target.value)}
                >
                  <option value="none">No bridal package</option>
                  {BRIDAL_PACKAGES.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name} — Rs {p.price.toLocaleString("en-PK")}
                    </option>
                  ))}
                </select>
                <span className="hint">
                  Brides: you can also <a href="/bridal/" style={{ color: "var(--accent-deep)", fontWeight: 600 }}>compare packages</a> first.
                </span>
              </div>

              <div className="form-2col">
                <div className="field">
                  <label htmlFor="bk-date">
                    Preferred date <span className="req">*</span>
                  </label>
                  <input
                    id="bk-date"
                    type="date"
                    value={date}
                    min={today}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                  {isMonday && (
                    <span className="warn">
                      We rest on Mondays — the salon is closed. Please pick
                      another day.
                    </span>
                  )}
                  {!isMonday && (
                    <span className="hint">Open Tue–Sun, 11am–8pm. Mondays closed.</span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="bk-slot">
                    Time slot <span className="req">*</span>
                  </label>
                  <select
                    id="bk-slot"
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                  >
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-2col">
                <div className="field">
                  <label htmlFor="bk-name">
                    Your name <span className="req">*</span>
                  </label>
                  <input
                    id="bk-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Areeba Khan"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="bk-phone">
                    Phone / WhatsApp <span className="req">*</span>
                  </label>
                  <input
                    id="bk-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="03xx xxxxxxx"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp btn-lg"
                style={{ width: "100%" }}
                disabled={!valid}
                title={valid ? "Send booking request on WhatsApp" : "Please fill all required fields"}
              >
                <WhatsAppIcon size={22} />
                Confirm Booking on WhatsApp
              </button>
              <p className="hint" style={{ textAlign: "center", marginTop: 16, color: "var(--muted)", fontSize: "0.88rem" }}>
                <CalendarIcon size={15} /> No advance payment — pay at the salon after your ritual.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
