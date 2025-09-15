import Typography from "../GradientText/Typography"
export default function BlogMeta({ tag, date }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-2 text-sm text-gray-600">
      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full uppercase tracking-wide">
        <Typography variant="extra-subtext-regular-jakarta">
          {tag}
        </Typography>
      </span>
      <span>
        <Typography variant="extra-subtext-regular-jakarta">
          {date}
        </Typography>
      </span>
    </div>
  );
}
