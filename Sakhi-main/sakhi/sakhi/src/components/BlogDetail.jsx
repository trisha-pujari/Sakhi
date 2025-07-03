import React from 'react';
import { useParams } from 'react-router-dom';
// import './BlogDetail.css';

const blogData = {
  1: {
    title: "Breaking Stereotypes: Her Tech Journey",
    content: `From a quiet corner of India to the global tech stage – meet Sneha, a 19-year-old coder redefining possibilities.Sneha's passion for technology didn’t begin in a state-of-the-art lab or a coding bootcamp. It began with a borrowed smartphone, a shaky internet connection, and an insatiable curiosity. In a town where girls were expected to dream small, she dared to dream in code.Late nights became her routine — watching free tutorials, scribbling down notes in old school notebooks, and debugging until the sun came up. Her first website was a basic HTML page about her favorite street food. It wasn't flashy, but it worked — and that made her feel unstoppable.

What set Sneha apart wasn't just talent — it was her grit. She faced doubts not just from society, but sometimes from within. When relatives asked, "Why not something safer? Something more suitable for girls?", she smiled and typed on. When her peers laughed at her for being “too ambitious,” she turned their noise into fuel.

Then came her breakthrough.

She applied for a national-level virtual hackathon — trembling with fear, yet full of hope. To her shock, her team’s idea for a multilingual learning app won second place. That moment changed everything. She wasn’t just a learner anymore. She was a creator. A leader.

Soon, she was mentoring other young girls in her area, conducting free coding sessions, and writing blogs in Hindi and English to make tech more accessible. Companies began noticing her LinkedIn posts. One internship turned into another. Today, she’s a front-end developer at a startup that believes in her vision. And she’s still only 19.

But for Sneha, success isn’t just about lines of code — it’s about rewriting the script for countless girls like her. She says, “The keyboard doesn’t care if you're a boy or a girl. It just responds to passion.”

Her Message to Every Girl Dreaming Beyond Boundaries:
“Don’t wait for permission. Start messy. Start scared. Just start. The world needs your voice, your code, your spark.”

Sneha’s journey proves that even when the path isn’t paved for you, you can still build your own road — one keystroke at a time.

`,
    image: "/hoo.jpeg"
  },
  2: {
    title: "Education for All",
    content: `💡 Education for All
Empowering the future, one girl at a time.

“When you educate a girl, you empower a generation.”

In the dusty lanes of rural India, a quiet revolution is underway. It doesn’t roar with noise, but whispers through chalkboards, mobile screens, and hopeful eyes — the revolution of education for girls.

🌾 The Challenge
For years, girls in villages have battled social norms, distance, and lack of resources just to attend school. In many homes, early marriage or household chores still replace textbooks and classrooms. But change is blooming — slowly, yet powerfully.

🚀 The Hope
From the sands of Rajasthan to the valleys of Assam, incredible initiatives are bridging the education gap:

📱 Digital Didi: Women-led digital literacy programs are teaching girls how to use smartphones, access educational content, and even code.

🚌 Mobile Classrooms: Vans converted into learning centers are bringing school to the doorsteps of girls who live miles away from the nearest school.

👩‍🏫 Mentorship Circles: Young college girls are volunteering as mentors to village girls — building dreams, sharing stories, and encouraging them to keep going.

🌸 Real Stories, Real Change
Meet Asha, a 14-year-old from a village in Bihar. She used to fetch water for 2 hours every day. Now, thanks to a solar-powered tablet from an NGO, she learns English and dreams of becoming a journalist.
"I want to tell stories of girls like me," she says.

Or Ritika, a dropout who returned to school after her mentor reminded her — “Your voice matters. Your dreams are valid.”

✨ Why This Matters
Educated girls:

Marry later

Earn more

Invest in their families

Break generational cycles of poverty

Every classroom seat filled by a girl is a step toward a stronger, more equal world.

📣 What Can You Do?
Donate old phones or books to rural education NGOs

Volunteer to teach online

Share stories like this — awareness creates ripple effects

Simply believe in her

💬 Final Thought
Empower a girl, and she empowers thousands.

Let us raise our voices, share our resources, and open the doors of education wide enough for every girl, everywhere.`,
    image: "/education.jpeg"
  },
  3: {
    title: "Scholarships You Didn't Know About",
    content: `Women in STEM can benefit from multiple national and international scholarships. Learn how to apply, eligibility, and hidden gems in this detailed guide. 
    🎓 Scholarships You Didn’t Know About
Unlocking Opportunities for Women in STEM Across India

Breaking barriers in science, technology, engineering, and mathematics (STEM) isn’t just about talent — it's about access. And one powerful way to make education accessible is through scholarships. If you’re a woman dreaming of a career in STEM, there are numerous national and international scholarships just waiting for you to apply.

In this blog, we’ll uncover hidden gems and prestigious scholarships that can support your academic journey and fuel your ambitions.

🌟 1. Pragati Scholarship Scheme by AICTE
Who’s it for? Girl students pursuing technical education (Diploma or Degree).

Eligibility: Family income < ₹8 lakh/year, 2 girls per family eligible.

Scholarship Amount: ₹50,000 per year + contingency allowance.

Why it’s great: Government-backed, easy to apply, supports thousands of women every year.

🔗 AICTE Pragati Scholarship Portal

🌍 2. Lady Meherbai D. Tata Education Scholarship
Who’s it for? Indian women graduates going abroad for higher studies in STEM, public health, social work, etc.

Eligibility: Must have a confirmed admission to a reputed university abroad.

Why it’s great: Prestigious and backed by the Tata Trusts; opens doors globally.

🔗 Tata Trusts Scholarships

🧠 3. Adobe Women-in-Technology Scholarship
Who’s it for? Female students in B.Tech or M.Tech in Computer Science or related fields.

What’s covered: Tuition fees, internship opportunities, and mentorship by Adobe engineers.

Why it’s great: Tech industry recognition + career boost with Adobe.

🔗 Adobe WIT Scholarship

🧪 4. Google Women Techmakers Scholarship (formerly AnitaB.org)
Who’s it for? Women in Computer Science-related fields.

What’s covered: Financial award + retreat with Google + global community access.

Why it’s great: Combines funding with networking & career opportunities.

🔗 Google Women Techmakers

🏛️ 5. Kiran Girls Scholarship by Persistent Foundation
Who’s it for? Meritorious girls from economically weaker sections pursuing undergraduate degrees in STEM.

Why it’s great: Focus on tier-2 & tier-3 cities, mentorship included.

🔗 Persistent Foundation

✨ 6. Society of Women Engineers (SWE) Scholarships
Who’s it for? Female engineering students, open to Indian nationals too.

Why it’s great: Globally recognized, huge network of women in engineering.

🔗 SWE Scholarships

📚 7. Inlaks Shivdasani Foundation Scholarships
Who’s it for? Young Indian students aiming for postgrad study abroad (including STEM).

What’s covered: Full or partial funding depending on need.

Why it’s great: Focuses on excellence & holistic selection.

🔗 Inlaks Foundation

💬 Final Words:
"When girls are educated and empowered, entire societies rise."

These scholarships are more than just financial aid — they are gateways to possibilities, change, and global opportunities. If you're a girl dreaming big in tech, science, or engineering — apply boldly. Your dreams are valid, and the support you need is out there.

Keep learning. Keep applying. Keep rising. 💪👩‍💻`,
    image: "/scholarship.jpeg"
  }
};

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) return <div>Blog not found!</div>;

  return (
    <div className="blog-detail-page">
      <img src={blog.image} alt={blog.title} className="detail-image" />
      <h1>{blog.title}</h1>
      <p className="blog-full-content">{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
