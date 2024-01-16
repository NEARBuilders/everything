/**
 * Every app is structured the same
 */
const { page, layout, loading, ...passProps } = props;

const { routes } = props.data

const { AppLayout } = VM.require("every.near/widget/layout") || {
  AppLayout: () => <>hello</>,
};

if (!page) page = "home";

const Theme = styled.div`
  a {
    color: inherit;
  }
`;

const [extraProps, setExtraProps] = useState({});

function Router({ active, routes }) {
  const routeParts = active.split(".");

  let currentRoute = routes;
  let src = "";
  let defaultProps = {};

  for (let part of routeParts) {
    if (currentRoute[part]) {
      currentRoute = currentRoute[part];
      src = currentRoute.path;

      // If the route has special initializations, you can add them to extraProps
      if (currentRoute.init) {
        defaultProps = { ...defaultProps, ...currentRoute.init };
      }
    } else {
      // Handle 404 or default case for unknown routes
      return <p>404 Not Found</p>;
    }
  }

  return (
    <Widget
      src="every.near/widget/thing"
      props={{ ...passProps, ...extraProps, path: src }}
    />
  );
}

// return (
//   <Theme>
//     <AppLayout page={page}>
//       <Router active={page} routes={routes} />
//     </AppLayout>
//   </Theme>
// );

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

return (
  <Theme> 
    <Container>
      <AppLayout page={route} routes={routes}>
        <Content>
          <Router active={activeRoute} routes={routes} />
        </Content>
      </AppLayout>
    </Container>
  </Theme>
);
