export const Card = ({ name, age, status, phrases, portrait_path }) => {
    return (
        <div
            className="card text-center p-3 m-2"
            style={{ width: "200px", height: "300px", borderRadius: "16px", overflow: "hidden" }}
        >
            <img
                src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`}
                className="rounded-3 mx-auto"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />

            <h5 className="mt-3 mb-1">{name}</h5>

            <div className="d-flex justify-content-center gap-2 mb-2 mt-2">
                <span className="badge rounded-pill bg-light text-dark border">Age: {age}</span>
                <span className={status === "Alive" ? "badge rounded-pill bg-success-subtle text-success border border-success" : "badge rounded-pill bg-secondary-subtle text-secondary border"}>
                    {status}
                </span>
            </div>

            <p
                className="fst-italic"
                style={{
                    color: "#b5651d",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                }}
            >
                "{phrases.length > 0 ? phrases[0] : "..."}"
            </p>
        </div>
    );
};