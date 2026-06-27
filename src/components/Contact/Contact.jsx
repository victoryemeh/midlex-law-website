import { useState, useEffect } from "react";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";
import { assets } from "../../assets";
import "./Contact.css";

const API_BASE = "https://midlex.com.ng/public/api";
const WEEKDAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(1);

  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 8)); // September 2026
  const [selectedDate, setSelectedDate] = useState(null); // full Date object
  const [selectedTime, setSelectedTime] = useState(null); // raw "HH:MM" from API

  const [availableSlots, setAvailableSlots] = useState({}); // { monday: ["08:00", ...], ... }
  const [slotsLoading, setSlotsLoading] = useState(true);
  const [slotsError, setSlotsError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [bookingStatus, setBookingStatus] = useState("idle"); // idle | submitting | error
  const [bookingError, setBookingError] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fetch available days/times from the booking API on mount
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        setSlotsLoading(true);
        setSlotsError(null);
        const res = await fetch(`${API_BASE}/booking/available-slots`);
        const data = await res.json();
        if (data.success) {
          setAvailableSlots(data.data || {});
        } else {
          setSlotsError("Could not load available consultation times.");
        }
      } catch (err) {
        setSlotsError("Could not load available consultation times.");
      } finally {
        setSlotsLoading(false);
      }
    };
    fetchSlots();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    );
  };

  const getMonthName = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  };

  const getDayKey = (date) => WEEKDAYS[date.getDay()];

  const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  // Format "08:00" -> "8:00 AM" for display, keep the raw value for the API call
  const formatTime = (time24) => {
    const [hourStr, minute] = time24.split(":");
    const hour = parseInt(hourStr, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:${minute}${period.toLowerCase()}`;
  };

  const generateCalendarDates = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const startDay = (firstDay + 6) % 7; // Monday = 0

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dates = [];

    for (let i = startDay - 1; i >= 0; i--) {
      dates.push({ date: daysInPrevMonth - i, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const fullDate = new Date(year, month, i);
      const dayKey = getDayKey(fullDate);
      const hasSlots = (availableSlots[dayKey] || []).length > 0;
      const isPast = fullDate < today;

      dates.push({
        date: i,
        isCurrentMonth: true,
        fullDate,
        isAvailable: hasSlots && !isPast,
        isSelected: selectedDate && isSameDay(fullDate, selectedDate),
      });
    }

    const remainingCells = 35 - dates.length;
    for (let i = 1; i <= remainingCells; i++) {
      dates.push({ date: i, isCurrentMonth: false });
    }

    return dates;
  };

  const handleDateClick = (item) => {
    if (!item.isCurrentMonth || !item.isAvailable) return;
    setSelectedDate(item.fullDate);
    setSelectedTime(null);
  };

  const timesForSelectedDate = selectedDate
    ? availableSlots[getDayKey(selectedDate)] || []
    : [];
  const morningTimes = timesForSelectedDate.filter(
    (t) => parseInt(t.split(":")[0], 10) < 12,
  );
  const afternoonTimes = timesForSelectedDate.filter(
    (t) => parseInt(t.split(":")[0], 10) >= 12,
  );

  const locations = [
    {
      name: "Benin",
      address:
        "1, Owa Street, Off Wire Road, Beside Samotaka Generators, Benin City, Edo State",
      phones: ["+234 703 456 9498", "+234 805 315 8954", "+234 816 160 1478"],
      image: assets.Office,
    },
    {
      name: "Lagos",
      address: "Plot 37, Campbell Street, Lagos Island",
      phones: ["+234 703 456 9498"],
      image: assets.Boardroom,
    },
    {
      name: "Abuja",
      address:
        "Suite 101, Trinity House, Mabushi, Plot 943, Cadastral Zone B06, FCT Abuja",
      phones: ["+234 806 680 4082"],
      image: assets.RedWall,
    },
    {
      name: "United Kingdom",
      address: "House 20, Calais Hill, Leicestershire, Le1 6AR",
      phones: ["+447 4175 15878"],
      image: assets.LibertyStatue,
    },
  ];

  const contactInfo = [
    {
      icon: assets.phoneIcon,
      title: "Phone number",
      content: "+234 703 456 9498",
    },
    {
      icon: assets.emailIcon,
      title: "E-mail",
      content: "info@midlex.com",
    },
    {
      icon: assets.clockIcon,
      title: "Open hours",
      content: "Monday – Friday: 8:00 AM – 4:00 PM",
    },
  ];

  const handleBookSession = async () => {
    setBookingError(null);

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setBookingError("Please fill in your personal information.");
      setOpenSection(1);
      return;
    }

    if (!selectedDate || !selectedTime) {
      setBookingError("Please select a date and time.");
      setOpenSection(2);
      return;
    }

    setBookingStatus("submitting");
    try {
      const res = await fetch(`${API_BASE}/booking/initialize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          day: getDayKey(selectedDate),
          time: selectedTime,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success && data.data?.authorization_url) {
        // Redirect to Paystack to complete payment
        window.location.href = data.data.authorization_url;
      } else {
        setBookingStatus("error");
        setBookingError(
          data.message || "Could not start your booking. Please try again.",
        );
      }
    } catch (err) {
      setBookingStatus("error");
      setBookingError(
        "Network error. Please check your connection and try again.",
      );
    }
  };

  return (
    <div className="contact-page">
      <LandingNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <img src={assets.herobg} alt="" className="articles-hero__bg-image" />
        </div>
        <div className="contact-hero__overlay"></div>
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Contact Us</h1>
          <p className="contact-hero__subtitle">
            Reach out to experience the Midas Touch. We're ready to provide you
            with comprehensive legal consultation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="contact-container">
        <div className="contact-form-section">
          {/* Section 1: Personal Information */}
          <div className="form-section">
            <div
              className="form-section__header"
              onClick={() => toggleSection(1)}
            >
              <div className="form-section__number">1</div>
              <span className="form-section__title">Personal Information</span>
              <img
                className={`form-section__icon ${openSection === 1 ? "open" : ""}`}
                src={assets.backarrow}
                alt="Toggle section"
              />
            </div>

            {openSection === 1 && (
              <div className="form-section__content">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Date and Time */}
          <div className="form-section">
            <div
              className="form-section__header"
              onClick={() => toggleSection(2)}
            >
              <div className="form-section__number">2</div>
              <span className="form-section__title">Date and Time </span>
              <img
                className={`form-section__icon ${openSection === 2 ? "open" : ""}`}
                src={assets.backarrow}
                alt="Toggle section"
              />
            </div>

            {openSection === 2 && (
              <div className="form-section__content">
                <div className="date-time-content">
                  <div className="month-selector">
                    <button
                      className="month-selector__btn"
                      onClick={handlePrevMonth}
                    >
                      <img
                        src={assets.backarrow}
                        alt="Previous month"
                        style={{ transform: "rotate(90deg)" }}
                      />
                    </button>
                    <span className="month-selector__text">
                      {getMonthName(currentMonth)} {currentMonth.getFullYear()}
                    </span>
                    <button
                      className="month-selector__btn"
                      onClick={handleNextMonth}
                    >
                      <img
                        src={assets.frontArrow}
                        alt="Next month"
                        style={{ transform: "rotate(90deg)" }}
                      />
                    </button>
                  </div>

                  <div className="calendar-header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  {slotsLoading ? (
                    <p className="slots-status">Loading available dates…</p>
                  ) : slotsError ? (
                    <p className="slots-status slots-status--error">
                      {slotsError}
                    </p>
                  ) : (
                    <div className="calendar-grid">
                      {generateCalendarDates().map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleDateClick(item)}
                          className={`calendar-date ${
                            !item.isCurrentMonth ? "other-month" : ""
                          } ${
                            item.isCurrentMonth && !item.isAvailable
                              ? "disabled"
                              : ""
                          } ${item.isSelected ? "selected" : ""}`}
                        >
                          {item.date}
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedDate && (
                    <div className="time-slots">
                      <div className="time-group">
                        <h4>Morning</h4>
                        <div className="time-buttons">
                          {morningTimes.length === 0 && (
                            <p className="slots-status">No morning slots.</p>
                          )}
                          {morningTimes.map((time) => (
                            <button
                              key={time}
                              className={`time-button ${
                                selectedTime === time ? "active" : ""
                              }`}
                              onClick={() => setSelectedTime(time)}
                            >
                              {formatTime(time)}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="time-group">
                        <h4>Afternoon</h4>
                        <div className="time-buttons">
                          {afternoonTimes.length === 0 && (
                            <p className="slots-status">No afternoon slots.</p>
                          )}
                          {afternoonTimes.map((time) => (
                            <button
                              key={time}
                              className={`time-button ${
                                selectedTime === time ? "active" : ""
                              }`}
                              onClick={() => setSelectedTime(time)}
                            >
                              {formatTime(time)}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar: Consultation Fee */}
        <div className="consultation-sidebar">
          <div className="consultation-fee">
            <p className="fee-label">Consultation fee</p>
            <div className="fee-display">
              <span className="fee-duration">60 MINS</span>
              <span className="fee-amount">₦150,000</span>
            </div>
          </div>

          {bookingError && <p className="booking-error">{bookingError}</p>}

          <button
            className="btn btn-primary btn-book"
            onClick={handleBookSession}
            disabled={bookingStatus === "submitting"}
          >
            {bookingStatus === "submitting" ? "Processing…" : "Book Now"}
          </button>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="contact-cards">
        {contactInfo.map((info, index) => (
          <div key={index} className="contact-card">
            <div className="contact-card__icon">
              <img src={info.icon} alt={info.title} />
            </div>
            <h3 className="contact-card__title">{info.title}</h3>
            <p className="contact-card__content">{info.content}</p>
          </div>
        ))}
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <h2 className="locations-title">Our Locations</h2>
        <div className="locations-carousel">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-card__image">
                <img src={location.image} alt={location.name} />
              </div>
              <div className="location-card__content">
                <h3 className="location-name">{location.name}</h3>
                <div className="location-info">
                  <div className="location-info__group">
                    <label>ADDRESS</label>
                    <p>{location.address}</p>
                  </div>
                  <div className="location-info__group">
                    <label>PHONE</label>
                    <p>{location.phones.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand />

      {/* Footer */}
      <Footer />
    </div>
  );
}
