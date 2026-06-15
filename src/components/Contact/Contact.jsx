import { useState, useEffect } from "react";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";
import { assets } from "../../assets";
import "./Contact.css";

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(1);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 8)); // September 2026
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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

  const generateCalendarDates = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // Get first day of current month (0 = Sunday, 1 = Monday, etc.)
    const firstDay = new Date(year, month, 1).getDay();
    // Convert to Monday = 0 format (we're displaying Mon-Sun)
    const startDay = (firstDay + 6) % 7;

    // Get number of days in current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Get number of days in previous month
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const dates = [];

    // Add previous month's days
    for (let i = startDay - 1; i >= 0; i--) {
      dates.push({ date: daysInPrevMonth - i, isCurrentMonth: false });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push({ date: i, isCurrentMonth: true });
    }

    // Add next month's days to fill the grid (35 cells for 5 weeks)
    const remainingCells = 35 - dates.length;
    for (let i = 1; i <= remainingCells; i++) {
      dates.push({ date: i, isCurrentMonth: false });
    }

    return dates;
  };

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

  const timeSlots = {
    morning: ["9:00am", "11:00am"],
    afternoon: ["12:00pm", "1:00pm", "3:00pm"],
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

                  <div className="calendar-grid">
                    {generateCalendarDates().map((item, idx) => (
                      <div
                        key={idx}
                        className={`calendar-date ${
                          !item.isCurrentMonth ? "other-month" : ""
                        }`}
                      >
                        {item.date}
                      </div>
                    ))}
                  </div>

                  <div className="time-slots">
                    <div className="time-group">
                      <h4>Morning</h4>
                      <div className="time-buttons">
                        {timeSlots.morning.map((time) => (
                          <button
                            key={time}
                            className={`time-button ${selectedTime === time ? "active" : ""}`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="time-group">
                      <h4>Afternoon</h4>
                      <div className="time-buttons">
                        {timeSlots.afternoon.map((time) => (
                          <button
                            key={time}
                            className={`time-button ${selectedTime === time ? "active" : ""}`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
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
              <span className="fee-amount">₦10,000</span>
            </div>
          </div>
          <button className="btn btn-primary btn-book">Book Now</button>
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
