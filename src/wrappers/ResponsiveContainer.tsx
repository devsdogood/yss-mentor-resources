const ResponsiveContainer: React.FC = ({ children }) => (
  <>
    <div
      className="container is-fluid is-hidden-touch"
      style={{
        paddingLeft: "8.52rem",
        paddingRight: "6rem",
        fontSize: "1.13rem",
      }}
    >
      {children}
    </div>
    <div className="container is-fluid is-hidden-desktop">{children}</div>
  </>
);

export default ResponsiveContainer;
