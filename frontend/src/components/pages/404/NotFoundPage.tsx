import imgNotFound from "../../../assets/svg/page_not_found.svg";

const NotFoundPage = () => {
  return (
    <section
      style={{
        display: "grid",
        placeItems: "center",
        paddingTop: "100px",
        textAlign: "center",
      }}
    >
      <h1>Parece que não encontramos o que você queria :/</h1>
      <img
        width={300}
        height={300}
        src={imgNotFound}
        alt="pagina não encontrada - erro 404"
      />
    </section>
  );
};

export default NotFoundPage;
