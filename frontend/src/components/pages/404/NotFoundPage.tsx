import imgNotFound from '../../../assets/svg/page_not_found.svg';

const NotFoundPage = () => {
  return (
    <>
      <h1>Parece que não encontramos o que você queria :/</h1>
      <img
        src={imgNotFound}
        alt="pagina não encontrada - erro 404"
      />
    </>
  );
};

export default NotFoundPage;
