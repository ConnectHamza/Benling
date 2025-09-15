export default function BlogHeader({ coverImage }) {
  return (
    <div className="pt-[75px]">
      <img
        src={coverImage}
        alt="Blog Header"
        className="w-full object-cover rounded-lg shadow"
      />
    </div>
  );
}
