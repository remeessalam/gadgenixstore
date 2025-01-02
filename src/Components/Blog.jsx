import { blogs } from "../constant";

const Blog = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold flex items-center">
            Our Latest Blog
          </h2>
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
            View All Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative group">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <span className="inline-block px-3 py-1 bg-white text-black rounded-full text-sm mb-2">
                  {blog.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                {blog.excerpt && (
                  <p className="text-gray-300 mb-2">{blog.excerpt}</p>
                )}
                {blog.author && (
                  <p className="text-sm text-gray-400">
                    By {blog.author} · {blog.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
