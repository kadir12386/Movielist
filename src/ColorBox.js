export function ColorBox({ color }) {
  const styles = {
    background: color,
    height: "120px",
    width: "200px",
    marginBottom: "10px",
  };
  return <div style={styles}></div>;
}
