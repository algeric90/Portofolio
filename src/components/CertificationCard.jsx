export default function CertificationCard({ cert }) {
  return (
    <div className="card rounded-4 overflow-hidden h-100">
      <div className="card-header p-0">
        <img
          src={cert.imageUrl}
          alt={cert.title}
          className="img-fluid w-100"
        />
      </div>

      <div className="card-body p-4 d-flex flex-column">
        <h6 className="card-title fw-semibold">
          {cert.title}
        </h6>

        <small className="card-date mb-2">
          {cert.issuer} • {cert.date}
        </small>

        <div className="mb-3">
          {cert.category.map((cat) => (
            <span
              key={cat}
              className="badge me-1 mb-1"
              style={{
                background: "var(--bg-light)",
                color: "var(--text-muted)",
                border: "1px solid var(--border-muted)"
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="btn mt-auto rounded-3"
        >
          Show Credential
        </a>
      </div>
    </div>
  );
}