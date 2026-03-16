import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const skills = [
    { title: "📸 Portret Fotoqrafiya", text: "İnsan emosiyalarını və xarakterini ön plana çıxaran peşəkar portret çəkilişləri.", progress: 90 },
    { title: "🎨 Kreativ Kompozisiya", text: "İşıq, rəng və perspektivdən istifadə edərək kreativ vizual hekayələr yaratmaq.", progress: 85 },
    { title: "🌅 Lifestyle Fotoqrafiya", text: "Real həyat anlarını təbii və emosional formada çəkmək.", progress: 80 },
    { title: "⚡ Photo Editing", text: "Lightroom və Photoshop ilə rəng korreksiyası və professional retouch.", progress: 95 }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>Haqqımda</h1>
          <p>
            Mən <b>Ali Nacafov</b>. Fotoqrafiya mənim üçün sadəcə şəkil
            çəkmək deyil. Hər kadr bir hekayədir və mən o hekayəni
            vizual olaraq danışmağı sevirəm.
          </p>
        </div>

        <div className="accordion">
          {skills.map((item, index) => (
            <div key={index} className={`accordion-item ${active === index ? "active" : ""}`}>
              <div className="accordion-header" onClick={() => toggle(index)}>
                <span>{item.title}</span>
                <span className={`arrow ${active === index ? "open" : ""}`}>▼</span>
              </div>

              <div className="accordion-body">
                <p>{item.text}</p>

                {/* Photo Skill Progress */}
                <div className="skill-row">
                  <span>Bacarıq göstəricisi</span>
                  <div className="progress">
                    <div
                      className="progress-fill"
                      style={{ '--fill-width': `${item.progress}%` }}
                      data-percent={item.progress}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
