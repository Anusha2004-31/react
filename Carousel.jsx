import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 10,
  });

  useEffect(() => {
    const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sale-banner-container position-relative">
      <img
        src="https://images.pexels.com/photos/3871/city-night-explosion-firework.jpg"
        alt="new-year-banner"
        className="big-banner"
      />
      <div className="left-top-sale-box text-white">
        <h2 className="fw-bold mb-2">🎉 BIGGEST NEW YEAR SALE 🎉</h2>
        <div className="countdown-box">
          <div className="time-item">
            <div className="time-number">{timeLeft.days}</div>
            <div className="time-label">Days</div>
          </div>

          <div className="time-item">
            <div className="time-number">{timeLeft.hours}</div>
            <div className="time-label">Hours</div>
          </div>

          <div className="time-item">
            <div className="time-number">{timeLeft.minutes}</div>
            <div className="time-label">Min</div>
          </div>

          <div className="time-item">
            <div className="time-number">{timeLeft.seconds}</div>
            <div className="time-label">Sec</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Carousel;
