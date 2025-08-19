
import Content from "./Content.tsx";
import Sidebar from "./Sidebar.tsx";

const Body = () => {
    return (
        <div className={'body'}>
            <Sidebar/>
            <Content/>
        </div>
    );
};

export default Body;