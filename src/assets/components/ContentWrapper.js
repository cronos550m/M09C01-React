
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Recuadro from './Recuadro';
import Footer from './Footer';
function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
            </div>
            <Recuadro />
            <Footer />
        </div>
    )
}
export default ContentWrapper;