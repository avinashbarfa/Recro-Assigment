import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ListSection from "./ListSection";

const MainComponent = () => {
    const headerTitle = "List App";
    const pathToFetchData = "http://jsonplaceholder.typicode.com/posts";
    const footerContent = "Recro Assignment";

    return (
        <>
            <HeaderComponent title={headerTitle} />
            <ListSection pathToLoadData={pathToFetchData} />
            <FooterComponent content={footerContent}/>
        </>
    )

};

export default MainComponent;
