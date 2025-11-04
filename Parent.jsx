
import { Child } from "./Child";
import { Mobiles } from "./utills";

export const Parent = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {Mobiles.map((item, index) => (
            <Child
              key={index}
              title={item.title}
              price={item.price}
              img={item.img}
              desc={item.desc}
              stock={item.stock}
            />
          ))}
        </div>
      </div>
    </>
  );
};
