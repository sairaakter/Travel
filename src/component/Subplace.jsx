export default function Subplace({
  services,
  image_url,
  destination,
  plasty,
  cnogap,
}) {
  return (
    <div className={`${plasty.places_wrapper} ${cnogap}`}>
      <div className={plasty.places_img}>
        <img src={image_url} alt="places" />
      </div>
      <div className={plasty.places_text}>
        <h2>{destination}</h2>
        <p>{services}</p>
      </div>
    </div>
  );
}
