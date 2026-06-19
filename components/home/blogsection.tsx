import Image from "next/image";
import {
  FaUsers,
  FaGraduationCap,
  FaHandHoldingHeart,
} from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800&q=80",
    icon: <FaUsers />,
    title: "Healthy Goat Breeding",
    desc: "Learn modern breeding techniques to raise stronger, healthier goats with improved productivity.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800&q=80",
    icon: <FaGraduationCap />,
    title: "Goat Farming Guide",
    desc: "Discover feeding schedules, vaccination plans and daily care practices for successful farming.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800&q=80",
    icon: <FaHandHoldingHeart />,
    title: "Qurbani & Sadqah Goats",
    desc: "Premium quality goats available for Qurbani, Aqiqah and Sadqah with doorstep delivery.",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="group">
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden rounded-t-[80px] rounded-b-[35px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="relative pl-8 pt-6">
                {/* Icon */}
                <div className="absolute -top-7 left-0 w-14 h-14 rounded-full bg-[#0b8f47] flex items-center justify-center text-white text-xl shadow-lg">
                  {blog.icon}
                </div>

                <h3 className="text-[28px] font-serif text-[#2b2b2b] mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7 max-w-[280px]">
                  {blog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}