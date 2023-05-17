function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `Ocurrió un error en el servidor: ${statusCode}`
          : 'Ocurrió un error en el cliente'}
      </p>
    );
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
  
  export default Error;
  