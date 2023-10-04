const ImageStack = ({ images }) => {
  const ImageItem = styled.img`
    width: 425.514px;
    height: 425.514px;
    object-fit: cover;

    border-radius: 23px;
    background: #fffefe;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    justify-content: center;

    @media (width <= 800px) {
      width: 246.575px;
      height: 256.037px;
    }
  `;

  const Container = styled.div`
    width: 496px;
    height: 482px;

    @media (width <= 800px) {
      width: 287.5px;
      height: 289px;
    }
  `;

  const AbsoluteImage = styled.img`
    width: 425.514px;
    height: 425.514px;
    object-fit: cover;

    border-radius: 23px;
    background: #fffefe;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: -55.6px;
    left: 71.5px;

    @media (width <= 800px) {
      width: 246.575px;
      height: 256.037px;

      left: 41.42px;
      bottom: -33.46px;
    }
  `;

  return (
    <Container>
      <div className="position-relative">
        <ImageItem src={images[1]} />
        <AbsoluteImage src={images[0]} />
      </div>
    </Container>
  );
};

const HeroSection = () => {
  const Container = styled.div`
    padding: 100px 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 140px;

    @media (width <= 800px) {
      flex-direction: column-reverse;
      gap: 60px;

      padding: 60px 16px;
    }
  `;

  const BoldWord = styled.span`
    font-weight: 700;
  `;

  const Heading = styled.h2`
    max-width: 628px;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    font-style: normal;
    line-height: 103.5%; /* 49.68px */

    @media (width <= 800px) {
      font-size: 30px;
    }
  `;

  const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1.5px solid #1d8e65;
    background: white;
    overflow: hidden;
  `;

  const Input = styled.input`
    flex: 1;
    padding: 13px;
    border: none;
    outline: none;
    border-radius: 0;

    &::placeholder {
      color: #9ba1a5;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      opacity: 1; /* Firefox */
    }

    &::-ms-input-placeholder {
      /* Edge 12 -18 */
      color: #9ba1a5;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  `;

  const Button = styled.button`
    background: none;
    border: none;
    padding: 10px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: white;
    background: #1b1b18;

    &:hover {
      background: #000000;
      color: white;
    }

    &:active {
      outline: none;
      border: none;
    }
  `;

  const CategoryItem = ({ name }) => {
    const Pill = styled.span`
      border-radius: 50rem;
      font-size: 1rem;
      font-weight: 400;
      padding: 2px 1rem;
      border: 1px solid #dcdcdc;
      cursor: pointer;
      background: #fff;
      color: #03b172;

      transition: all 300ms;

      &:hover {
        color: #fff;
        background: #03b172;
      }
    `;
    return <Pill>{name}</Pill>;
  };

  const InfoIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        style={{ cursor: "pointer" }}
      >
        <path
          d="M9.99999 1.78708C14.6033 1.78708 18.335 5.51875 18.335 10.1221C18.335 14.7246 14.6033 18.4554 9.99999 18.4554C5.39666 18.4562 1.66666 14.7246 1.66666 10.1221C1.66582 5.51875 5.39666 1.78708 9.99999 1.78708ZM9.99666 8.66208C9.79243 8.66236 9.59542 8.73762 9.44303 8.87357C9.29064 9.00953 9.19348 9.19671 9.16999 9.39958L9.16416 9.49625L9.16749 14.0812L9.17249 14.1779C9.19578 14.3812 9.29302 14.5688 9.4457 14.7049C9.59838 14.8411 9.79582 14.9164 10.0004 14.9164C10.205 14.9164 10.4024 14.8411 10.5551 14.7049C10.7078 14.5688 10.805 14.3812 10.8283 14.1779L10.8333 14.0804L10.83 9.49541L10.8242 9.39791C10.8001 9.19521 10.7024 9.0084 10.5497 8.87292C10.3971 8.73744 10.2 8.66271 9.99582 8.66291L9.99666 8.66208ZM10.0008 5.53791C9.72423 5.53791 9.45895 5.64779 9.26337 5.84338C9.06778 6.03896 8.95791 6.30423 8.95791 6.58083C8.95791 6.85743 9.06778 7.1227 9.26337 7.31828C9.45895 7.51387 9.72423 7.62375 10.0008 7.62375C10.1377 7.62369 10.2733 7.59667 10.3997 7.54423C10.5262 7.49179 10.6411 7.41495 10.7379 7.31811C10.8346 7.22127 10.9114 7.10631 10.9637 6.97981C11.0161 6.8533 11.043 6.71773 11.0429 6.58083C11.0429 6.44393 11.0158 6.30837 10.9634 6.18191C10.911 6.05545 10.8341 5.94056 10.7373 5.84379C10.6404 5.74703 10.5255 5.67028 10.399 5.61794C10.2725 5.5656 10.1369 5.53869 9.99999 5.53875L10.0008 5.53791Z"
          fill="white"
        />
      </svg>
    );
  };

  const images = [
    "https://plus.unsplash.com/premium_photo-1673338411083-47e01b496247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    "https://images.unsplash.com/photo-1660742533971-eb413acbfb47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  ];

  const CategoriesContainer = styled.div`
    @media (width <= 800px) {
      flex-direction: column;
      align-items: flex-start !important;
      gap: 1rem;
    }
  `;

  const HeroCircle = () => {
    const SVG = styled.svg`
      @media (width <= 800px) {
        width: 129.98px;
        height: 129.98px;
      }
    `;
    return (
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="490"
        height="490"
        viewBox="0 0 490 490"
        fill="none"
      >
        <path
          d="M244.824 0C109.627 0 0 109.627 0 244.824C0 380.022 109.627 489.649 244.824 489.649C380.022 489.649 489.649 380.022 489.649 244.824C489.649 109.627 380.022 0 244.824 0Z"
          fill="url(#paint0_linear_384_1389)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_384_1389"
            x1="64.9167"
            y1="78.3438"
            x2="433.378"
            y2="407.021"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#122C22" />
            <stop offset="0.520833" stop-color="#0E6444" />
            <stop offset="1" stop-color="#0C8659" />
          </linearGradient>
        </defs>
      </SVG>
    );
  };

  const HeroShape = () => {
    const SVG = styled.svg`
      @media (width <= 800px) {
        width: 32.495px;
        height: 67.156px;
      }
    `;
    return (
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="123"
        height="254"
        viewBox="0 0 123 254"
        fill="none"
      >
        <path
          d="M40.2 83.3193L18.6062 104.967C30.5249 116.915 30.5249 136.453 18.6062 148.402L40.2 170.049C64.0375 146.153 64.0375 107.356 40.2 83.3193Z"
          fill="#76F4C6"
          fill-opacity="0.8"
        />
        <path
          d="M83.3878 170.189L104.982 148.542C93.0628 136.594 93.0628 117.055 104.982 105.107L83.3878 83.4597C59.5503 107.356 59.5503 146.153 83.3878 170.189Z"
          fill="#76F4C6"
          fill-opacity="0.8"
        />
        <path
          d="M18.4659 235.272L40.0598 213.625C51.9785 225.573 71.469 225.573 83.3878 213.625L104.982 235.272C81.1441 259.309 42.4437 259.309 18.4659 235.272Z"
          fill="#76F4C6"
          fill-opacity="0.8"
        />
        <path
          d="M18.4659 235.272L40.0597 213.625C28.141 201.677 28.141 182.138 40.0597 170.189L18.4659 148.542C-5.3716 172.439 -5.3716 211.376 18.4659 235.272Z"
          fill="#76F4C6"
          fill-opacity="0.8"
        />
        <path
          d="M105.122 148.542L83.5281 170.189C95.4468 182.138 95.4468 201.677 83.5281 213.625L105.122 235.272C128.959 211.376 128.959 172.439 105.122 148.542Z"
          fill="#76F4C6"
          fill-opacity="0.8"
        />
        <path
          d="M105.122 18.2367L83.528 39.8839C71.6093 27.9357 52.1188 27.9357 40.2 39.8839L18.6062 18.2367C42.4437 -5.65964 81.1441 -5.65964 105.122 18.2367Z"
          fill="#76F4C6"
          fill-opacity="0.8"
        />
        <path
          d="M105.122 18.2368L83.5281 39.884C95.4468 51.8322 95.4468 71.3712 83.5281 83.3194L105.122 104.967C128.959 81.0702 128.959 42.2738 105.122 18.2368Z"
          fill="#76F4C6"
          fill-opacity="0.8"
        />
        <path
          d="M18.4659 105.107L40.0597 83.4598C28.141 71.5116 28.141 51.9729 40.0597 40.0247L18.4659 18.3772C-5.3716 42.2736 -5.3716 81.0703 18.4659 105.107Z"
          fill="#76F4C6"
          fill-opacity="0.8"
        />
      </SVG>
    );
  };

  const HeroSVG = styled.div`
    @media (width <= 800px) {
      right: -16.02px !important;
    }
  `;

  const ResponsiveContainer = styled.div`
    @media (width <= 800px) {
      align-self: flex-start !important;
    }
  `;

  return (
    <div style={{ background: "#03B172" }}>
      <Container>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Heading>
            <BoldWord>Discover</BoldWord>, <BoldWord>learn</BoldWord> and{" "}
            <BoldWord>build</BoldWord>
            the future of the BOS.
          </Heading>
          <div style={{ marginTop: "40px" }}>
            <InputContainer className="input-group">
              <Input
                className="form-control"
                type="text"
                placeholder="Try events calendar, AI chatbot, or gigs board..."
              />
              <Button cl>
                <i className="bi bi-search"></i>
              </Button>
            </InputContainer>
            <CategoriesContainer
              className="d-flex align-items-center"
              style={{
                color: "white",
                fontWeight: 500,
                fontSize: "1rem",
                marginTop: "24px",
              }}
            >
              <p className="m-0 me-2">Categories: </p>
              <div className="d-flex gap-2 align-items-center flex-wrap">
                <CategoryItem name="Thing" />
                <CategoryItem name="Type" />
                <CategoryItem name="Widget" />
                <CategoryItem name="Components" />
                <CategoryItem name="Projects" />
                <InfoIcon />
              </div>
            </CategoriesContainer>
          </div>
        </div>
        <ResponsiveContainer className="position-relative">
          {/* <ImageStack images={images} /> */}
          <HeroCircle />
          <HeroSVG
            className="position-absolute"
            style={{ bottom: "25%", right: -60.35 }}
          >
            <HeroShape />
          </HeroSVG>
        </ResponsiveContainer>
      </Container>
    </div>
  );
};

return <HeroSection />;
