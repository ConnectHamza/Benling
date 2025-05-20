export default function BlogRightSidebar({ recentArticles = [] }) {
  return (
    <aside className="w-full lg:w-56 mb-8 lg:mb-0">
      <div className="bg-white rounded-lg shadow p-4 sticky top-8">
        <h2 className="text-lg font-semibold mb-4">Recent Articles</h2>
        <ul>
          {recentArticles.map((article, idx) => (
            <li key={idx} className="mb-3">
              <a href={`/blogs/${article.slug}`} className="text-blue-600 hover:underline flex items-center gap-2">
                {article.coverImage && (
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-10 h-10 rounded object-cover"
                  />
                )}
                <span>{article.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
