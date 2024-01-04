import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#E4E8EF", "#475BE8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Todays Sales",
          value: "$20.4K",
          text: "We have sold 123 items",
        }}
      />
      <AreaCard
        colors={["#E4E8EF", "#4CE13F"]}
        percentFillValue={50}
        cardInfo={{
          title: "Todays Revenue",
          value: "$8.2K",
          text: "Availabale to payout",
        }}
      />
      <AreaCard
        colors={["#E4E8EF", "#F29A2E"]}
        percentFillValue={40}
        cardInfo={{
          title: "In Escrow",
          value: "$18.2K",
          text: "Availabale to payout",
        }}
      />
    </section>
  );
};

export default AreaCards;
