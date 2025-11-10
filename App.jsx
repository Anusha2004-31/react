
// import React from "react";
// import Loader from "./components/Loader";

// const App = () => {
//     return (
//         <>
//             <Loader />
//         </>
//     );
// };

// export default App;


import { useState } from "react";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [booked, setBooked] = useState(false);

    function movieticket() {
        setLoading(true);
        setError("");
        setBooked(false);

        setTimeout(() => {
            if (Math.random() > 0.5) {
                setError("Sorry, tickets are not available");
                setLoading(false);
            } else {
                setBooked(true);      // Success
                setLoading(false);
            }
            console.log(Math.random());

        }, 2000);
    }

    return (
        <>
            <div className="card text-center m-5 p-5">
                <h1>Movie Tickets – BookMyShow</h1>

                <button className="btn btn-outline-dark" onClick={movieticket}>
                    Book Now
                </button>

                {/* Loading */}
                {loading && <h2 className="mt-3">Fetching tickets...</h2>}

                {/* Success */}
                {booked && !loading && !error && (
                    <h2 className="mt-3 text-success">
                        Successfully booked! Enjoy the show.
                    </h2>
                )}

                {/* Error */}
                {error && !loading && (
                    <h2 className="mt-3 text-danger">{error}</h2>
                )}

                {/* Default Message */}
                {!loading && !booked && !error && (
                    <h3 className="mt-3">Tickets available. Book now.</h3>
                )}
            </div>
        </>
    );
};

export default App;
