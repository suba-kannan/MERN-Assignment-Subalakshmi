const NullishCoalescing = () => {

    const username = null;
  return (
    <>
      <h2>Nullish coalescing operator</h2>
      <h2>{username ?? "Guest User"}</h2>
    </>
  );
}

export default NullishCoalescing