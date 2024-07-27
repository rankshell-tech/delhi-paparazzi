import { Carousel } from "react-responsive-carousel";
import Header from "../../components/header/header";
import "./activity.css";
import ActivityReviews from "./activityReview";

export default function Activity({
  headImages = [
    "https://picsum.photos/1900/500",
    "https://picsum.photos/1900/500",
    "https://picsum.photos/1900/500",
  ],
  tittle = "Delhi Murder case took a wild turn",
  text = "Officiis error pariatur, perspiciatis ipsum officia deserunt iure provident aspernatur, praesentium dolore debitis quis harum. Reiciendis ducimus eligendi harum sequi, qui quos delectus molestiae. Consequuntur repudiandae saepe illum reiciendis asperiores, temporibus magnam vero quis odio tempora similique provident velit perferendis tenetur! Provident aliquid earum maxime incidunt impedit sed corporis placeat numquam nihil, suscipit atque odio perferendis odit recusandae illo adipisci consectetur cupiditate quaerat velit, sequi voluptas quia? Sed voluptas perspiciatis vel tempore modi similique illum, officia debitis sequi quaerat voluptate quas qui nulla, quisquam eos error dolore labore voluptates repellendus numquam est explicabo esse. Est necessitatibus libero veritatis voluptatem quos odio excepturi nisi perspiciatis nulla ipsam modi consectetur laudantium magni itaque tenetur quidem, quaerat cumque ipsum sunt dicta! Qui at vel dolor commodi earum voluptatibus unde fuga adipisci voluptas tempore sint quisquam, autem asperiores voluptates explicabo quos corporis debitis recusandae aliquid veniam repellat id optio atque itaque. Libero molestias modi rerum ratione. Inventore provident consequuntur enim eos. Temporibus magni, porro quisquam provident pariatur inventore explicabo fugit alias. At consectetur quam animi laudantium corrupti nihil! Beatae quos aspernatur nam iste illum ullam laboriosam? RerumLorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam placeat voluptate facilis optio excepturi delectus architecto iste voluptates veniam similique, molestiae cupiditate. Rem consectetur ipsam sapiente architecto ut illo a enim magnam. Porro vel dignissimos doloribus perspiciatis dicta maiores illum, ducimus mollitia distinctio aliquam maxime quam provident soluta sed commodi pariatur, ad velit cumque consequatur? Blanditiis repudiandae in placeat nesciunt nihil ut magni rem explicabo, qui odio, quod aliquid exercitationem unde obcaecati cum non repellendus excepturi assumenda numquam natus quidem tempore, quibusdam eos doloribus. Eum aliquam vel voluptate iustoLorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam placeat voluptate facilis optio excepturi delectus architecto iste voluptates veniam similique, molestiae cupiditate. Rem consectetur ipsam sapiente architecto ut illo a enim magnam. Porro vel dignissimos doloribus perspiciatis dicta maiores illum, ducimus mollitia distinctio aliquam maxime quam provident soluta sed commodi pariatur, ad velit cumque consequatur? Blanditiis repudiandae in placeat nesciunt nihil ut magni rem explicabo, qui odio, quod aliquid exercitationem unde obcaecati cum non repellendus excepturi assumenda numquam natus quidem tempore, quibusdam eos doloribus. Eum aliquam vel voluptate iusto vero",
}) {
  return (
    <div className="activityPage">
      <Header />
      <div className="headingContainer">
        <div className="imageSlider">
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            {headImages.map((image, index) => {
              return (
                <div key={index}>
                  <img src={image} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="tittleContainer">
          <h1>{tittle}</h1>
        </div>
      </div>
      <div className="textContainer p-5">
        <p>{text}</p>
      </div>
      <ActivityReviews />
    </div>
  );
}
