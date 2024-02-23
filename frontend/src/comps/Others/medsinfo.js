import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Medsinfo() {
	const [searchMed, setSearchMed] = useState('');

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleSearch = () => {
		switch (searchMed) {
			case "Crocin Advance":
			case "Azithral-500":
			case "Ecosprin 75":
			case "Montek LC":
				scrollToSection('section1');
				break;
			case "Pan-D Capsule 15's":
			case "Shelcal-500":
			case "Lipril 5":
			case "Atorva 20":
				scrollToSection('section2');
				break;
			case "Primolut-N":
			case "Meftal-Spas":
			case "Flexabenz":
			case "Telmikind-40":
				scrollToSection('section3');
				break;
			case "Dolo-650":
			case "Solvin Cough":
			case "Paracip-650":
			case "Combiflam":
				scrollToSection('section4');
				break;
			case "Limcee 500mg orange":
			case "Okacet":
			case "Cipcal-500":
			case "Pantop-D SR":
				scrollToSection('section5');
				break;
			default:
				// Handle invalid or unrecognized search terms here
				break;
		}

		setSearchMed('');
	}
	return (
		<div style={{ "background-color": "white" }}>
			<nav className="navbar" style={{ "background-color": "#e3f2fd;" }}>
				<div className="container-fluid">
					<Link to="/" className="navbar-brand"><img src='../../assets/img/gallery/logo.png' width={300} alt='HEALTH ELEVATOR' /></Link>
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchMed}
							onChange={(e) => setSearchMed(e.target.value)}
						/>
						<button className="btn btn-outline-success" type="submit" onClick={(e) => {
							e.preventDefault();
							handleSearch();
						}}
						>Search</button>
					</form>
				</div>
			</nav>
			<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="10000">
						<img src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="..." />

						<div className="carousel-caption d-none d-md-block">
							<h3>MEDICINES AND DRUGS</h3>
							<p>HEALTH ELEVATOR</p>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<img src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h4>Know more, Be sure.</h4>
							<p>(Have a detailed informations about your medicines)</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h4>Detailed medicine knowledge</h4>
							<p></p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="container1 h-100">
				<div className="row row-cols-1 row-cols-md-4 g-4" id="section1">
					<div className="col" >
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://images.apollo247.in/pub/media/catalog/product/C/R/CRO0091_1.jpg"
								className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Crocin Advance </h5>
								<p className="card-text">Crocin Advance Tablet 20's belongs to the group of medicines called analgesics (pain killers), and antipyretics (fever-reducing agents) used to reduce fever and treat mild to moderate pain. Also, it is used to relieve headache, migraine, toothache, period pain, back pain, muscle pain and rheumatic pains. Pain and fever are caused by the activation of pain receptors due to the release of certain natural chemicals in the body like prostaglandin. </p>
								<h6>Uses of Crocin Advance Tablet 20's</h6>
								<p>Fever, Pain relief</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://www.practostatic.com/practopedia-images/v3/res-750/azithral-500mg-tablet-5-s_f6ba2cec-3738-4978-9a6c-751392ff2141.JPG" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Azithral-500 Tablet 5's</h5>
								<p className="card-text">
									Azithral-500 Tablet 5's belongs to a group of medicines known as macrolide antibiotics. It is used to treat various respiratory system bacterial infections (like pneumonia, bronchitis, tonsillitis, pharyngitis and sinusitis), skin infections (like acne and rosacea), ear infections, and sexually transmitted infections. A bacterial infection is a condition in which bacteria grow in the body and cause infection. It can target any body part and multiple very quickly.</p>
								<h6>Uses of Azithral-500 Tablets</h6>
								<p>
									Bacterial infections</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/reowbvajejs6awykdplk.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Ecosprin 75 Tablet</h5>
								<p className="card-text" />
								Ecosprin 75 Tablet 14's belongs to the class of anti-inflammatory and blood-thinning/antiplatelet agents. Its use varies according to its strength. In a low dose (about 75 mg), Aspirin acts as a blood-thinning or antiplatelet agent used to prevent heart attack and stroke. On the other hand, in high dose (about 325 mg) acts as an analgesic, relieving minor aches, pains and fevers. </div>
							<h6>Uses of Ecosprin 75 Tablet</h6>
							<p>
								Pain relief, Prevention of heart attack, Prevention of stroke</p>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://www.practostatic.com/practopedia-images/v3/res-750/montek-lc-tablet-10-s_3ed31dac-e5b5-41fe-9dbf-537ed166bbaf.JPG" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Montek LC Tablet</h5>
								<p className="card-text" />
								Montek LC Tablet 10's belongs to a class of drugs called antihistamines or anti-allergics. It treats sneezing, runny nose, and allergic skin conditions due to various allergies and hay fever (seasonal allergy). An allergy is an immune system response to foreign elements typically not harmful to your body. These foreign elements are known as 'allergens.' Allergic condition varies from person to person </div>
							<h6>Uses of Montek LC Tablet</h6>
							<p>
								Allergies/Allergic reactions, Hay fever</p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="container1 h-100">
				<div className="row row-cols-1 row-cols-md-4 g-4 " id="section2">
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://pawxieimg.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/12/08021206/Pan-D-Gastro-Resistant-40-mg-15-Tablets-From-Alkem-2.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Pan-D Capsule 15's</h5>
								<p className="card-text">
									Pan-D Capsule 15's is composed of two medicines, namely: Domperidone and Pantoprazole. Domperidone is a prokinetic and anti-nausea agent that helps to treat indigestion and stomach pain. On the other hand, Pantoprazole is a proton pump inhibitor that reduces the excess stomach acid formation by blocking the actions of an enzyme (H+/K+ ATPase or gastric proton pump)</p>
								<h6>Uses of Pan-D Capsule 15's</h6>
								<p>Gastroesophageal reflux disease (GERD), Heartburn due to hyperacidity</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://m.media-amazon.com/images/I/510Uiz6vUsL._AC_UF350,350_QL50_.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Shelcal-500 Tablet 15's</h5>
								<p className="card-text">
									Shelcal-500 Tablet 15's belongs to the class of 'Nutritional supplements', primarily used to treat low blood calcium levels. Shelcal-500 Tablet 15's effectively treats various conditions caused by low calcium levels in the body like Vitamin D deficiency.Shelcal XT Tablet may be taken with or without food. Take it in the dose and duration advised by the doctor. Take it regularly at the same time each day to get maximum benefits from it.</p>
								<h6>Uses of Shelcal-500 Tablet 15's</h6>
								<p>
									Vitamin D deficiency, Hypoparathyroidism, and Latent tetany</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://5.imimg.com/data5/SELLER/Default/2023/1/QN/CQ/RR/2581214/tryptomer-25-mg-tablets-amitriptyline-hcl-.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Lipril 5 Tablet 15's</h5>
								<p className="card-text">
									Lipril 5 Tablet 15's belongs to the group of blood pressure-lowering medications called 'Angiotensin-Converting Enzyme (ACE) Inhibitors' primarily used to treat high blood pressure (hypertension) and reduce the risk of having a heart attack, stroke, or heart failure.Lipril 5 Tablet 15's contains lisinopril, which works by lowering the body’s production of substances that could increase blood pressure.</p> </div>
							<h6>Uses of Lipril 5 Tablet 15's</h6>
							<p>
								Prevention of heart attack, stroke and heart failure</p>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://egmedi.com/wp-content/uploads/2020/12/Atorva-20-Tablet-1200x675.webp" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Atorva 20 Tablet 15's</h5>
								<p className="card-text">
									Atorva 20 Tablet 15's belongs to a class of medications called statins to treat raised cholesterol levels in our body. Atorva 20 Tablet 15's helps lower the level of low-density lipoprotein (LDL) or bad cholesterol in the blood and increase the level of high-density lipoprotein (HDL) or good cholesterol.Lowering cholesterol levels helps prevent heart diseases such as heart attacks and strokes in the future. Atorva 20 Tablet 15's can also be prescribed for people with a family history of raised cholesterol </p></div>
							<h6>Uses of Atorva 20 Tablet 15's</h6>
							<p>
								High cholesterol</p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="container1 h-100">
				<div className="row row-cols-1 row-cols-md-4 g-4" id="section3">
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://images.apollo247.in/pub/media/catalog/product/P/R/PRI0009_1_1.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Primolut-N Tablet 10's </h5>
								<p className="card-text">
									Primolut-N Tablet 10's belongs to the class of medicines called progestogens used to treat heavy, painful, or irregular periods, premenstrual syndrome (PMS), and endometriosis. Additionally, Primolut-N Tablet 10's may be used in the treatment of breast cancer. Endometriosis is a disorder in which the uterus's tissue lining (endometrium) grows on the ovaries, bowel, or tissues lining the pelvis. The most common symptom is pelvic pain.</p>
								<h6>Uses of Primolut-N Tablet 10's</h6>
								<p>Heavy, painful or irregular periods</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://www.practostatic.com/practopedia-images/v3/res-750/meftal-spas-tablet-10-s_b734475b-4c83-4e6c-a651-739d6f8cf8b4.JPG" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Meftal-Spas Tablet 10's</h5>
								<p className="card-text">

									Meftal-Spas Tablet 10's is a combination medicine used to treat abdominal pain, dysmenorrhea (period pain), and colicky pain. Abdominal (tummy) pain occurs between the chest and pelvic region (below the belly button and leg). Menstrual cramps, also known as dysmenorrhea, are characterised by cramps and pain during menstruation. Colic is a form of pain that starts and stops abruptly.</p>
								<h6>Uses of Meftal-Spas Tablet 10's</h6>
								<p>
									Abdominal pain, dysmenorrhea (period pain)</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://meds.myupchar.com/63445/open-uri20220423-26609-127agu3" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Flexabenz Tablet 10's</h5>
								<p className="card-text">

									Flexabenz Tablet 10's belongs to the group of medicines called 'muscle relaxant' used to reduce and relieve the muscle spasm or excessive muscle tension occurring in various illnesses. Muscle spasm is the sudden involuntary contractions of the muscle, which can be painful and uncomfortable. When the nerve impulses that control the muscle movements are damaged or interrupted, it could lead to muscle spasms. </p></div>
							<h6>Uses of Flexabenz Tablet 10's</h6>
							<p>
								Muscle spasm</p>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://www.practostatic.com/practopedia-images/v3/res-750/telmikind-40mg-tablet-10-s_be5ab14a-2489-4daa-a70c-317a7167016c.JPG" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Telmikind-40 Tablet 10's</h5>
								<p className="card-text">

									Telmikind-40 Tablet 10's belongs to a group of medicines known as angiotensin II receptor blockers that are used for the treatment of hypertension (high blood pressure) in adults. Additionally, Telmikind-40 Tablet 10's is used to reduce the risk of heart attack or stroke in adults. Essential hypertension is a medical condition in which the blood pressure is elevated persistently in the arteries without any known cause.</p> </div>
							<h6>Uses of Telmikind-40 Tablet 10's</h6>
							<p>
								High blood pressure (hypertension), Prevention of heart attack and stroke</p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="container1 h-100">
				<div className="row row-cols-1 row-cols-md-4 g-4" id="section4">
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://5.imimg.com/data5/SELLER/Default/2021/12/MB/ZU/JH/119255851/new-product-500x500-1-.jpeg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Dolo-650 Tablet 15's </h5>
								<p className="card-text"> Dolo-650 Tablet 15's
									Dolo-650 Tablet 15's belongs to the group of medicines called analgesics (pain killers), and antipyretics (fever-reducing agents) used to reduce fever and treat mild to moderate pain. Also, it is used to relieve headache, migraine, toothache, period pain, back pain, muscle pain and rheumatic pains. Pain and fever are caused by the activation of pain receptors due to the release of certain natural chemicals in the body like prostaglandin. </p>
								<h6>Uses of Dolo-650 Tablet 15's</h6>
								<p>Fever, Pain relief</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://meds.myupchar.com/62932/open-uri20220423-26609-eybxwj" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Solvin Cough Tablet 10's</h5>
								<p className="card-text">

									Solvin Cough Tablet 10's belongs to a class of medication called 'cough and cold preparations' primarily used to treat cough due to runny nose, sneezing, and throat irritation. Coughing (dry or productive) is the body's way of clearing irritants (like allergens, mucus or smoke) from airways and preventing infection.Your doctor will recommend the dose and duration of Solvin Cough Tablet 10's based on your medical condition. </p>
								<h6>Uses of Solvin Cough Tablet 10's</h6>
								<p>
									Cough</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://5.imimg.com/data5/SELLER/Default/2022/9/OI/RK/WJ/75459511/paracetamol-650-tablet.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title"> Paracip-650 Tablet 10's</h5>
								<p className="card-text">

									Paracip-650 Tablet 10's belongs to the group of medicines called analgesics (pain killers), and antipyretics (fever-reducing agents) used to reduce fever and treat mild to moderate pain. Also, it is used to relieve headache, migraine, toothache, period pain, back pain, muscle pain and rheumatic pains</p> </div>
							<h6>Uses of  Paracip-650 Tablet 10's</h6>
							<p>
								Fever, Pain relief</p>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://images.apollo247.in/pub/media/catalog/product/c/o/com0004_1_feb23.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Combiflam Tablet 20's</h5>
								<p className="card-text">
									Combiflam Tablet 20's belongs to a class of painkillers called non-steroidal anti-inflammatory drugs (NSAIDs). It relieves symptoms of muscle pain, arthritis pain, dysmenorrhea (painful periods or menstrual cramps), and dental pain and reduces fever. Pain can be temporary (acute) or long-lasting (chronic). Acute pain is for a short time caused by damage to the tissues of the muscle, bone, or other organs</p> </div>
							<h6>Uses of Combiflam Tablet 20's</h6>
							<p>
								Muscle pain, Arthritis pain, Headache, Migraine, Backache, Dental pain, Fever</p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="container1 h-100">
				<div className="row row-cols-1 row-cols-md-4 g-4" id="section5">
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://images.apollo247.in/pub/media/catalog/product/l/i/lim0003_1_june23.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Limcee 500 mg Chewable Orange Tablet 15's</h5>
								<p className="card-text">
									Limcee 500 mg Chewable Orange Tablet 15's belongs to a class of medicines called nutritional supplements used to prevent and treat nutritional deficiencies and vitamin C deficiency. A nutritional deficiency occurs when the body does not absorb or get enough nutrients from food. Vitamins and minerals are necessary for body development and the prevention of diseases.Limcee 500 mg Chewable Orange Tablet 15's contains Ascorbic acid (vitamin C) that works by increasing vitamin C levels in the body. Thus, it helps in treating vitamin C deficiency. </p>
								<h6>Uses of Limcee 500 mg Chewable Orange Tablet 15's</h6>
								<p>Vitamin C deficiency</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://images.apollo247.in/pub/media/catalog/product/O/K/OKA0005_1_1.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Okacet Tablet 10's</h5>
								<p className="card-text">


									Okacet Tablet 10's is an antihistamine medicine used in the treatment of allergies. It helps provide relief from various allergic reactions in children. An allergic reaction is a response that occurs when the foreign particles enter the body. This allergic reaction may vary from person to person. Okacet Tablet 10's is used to treat allergic rhinitis and chronic idiopathic urticaria (swelling, redness, and itchiness of the skin).Okacet Tablet 10's is intended for pediatric use only. Avoid giving Okacet Tablet 10's to your child if she/he is allergic to it. </p>
								<h6>Uses of Okacet Tablet 10's</h6>
								<p>Allergic reactions</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://images.apollo247.in/pub/media/catalog/product/C/I/CIP0081_1_1.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Cipcal-500 Tablet 15's</h5>
								<p className="card-text">

									Cipcal-500 Tablet 15's belongs to the class of 'nutritional supplements', primarily used to treat low blood calcium levels. Cipcal-500 Tablet 15's effectively treats various conditions caused by low calcium levels in the body like Vitamin D deficiency, osteoporosis (weak and brittle bones), hypoparathyroidism (parathyroid glands make low levels of calcium in the body), latent tetany (a muscle disease with low blood calcium levels), and rickets</p> </div>
							<h6>Uses of Cipcal-500 Tablet 15's</h6>
							<p>
								Osteoporosis, Osteomalacia (Rickets), Vitamin D deficiency</p>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ backgroundColor: "#c3c3c3" }}>
							<img src="https://lh3.googleusercontent.com/_O547KkkiQ7r1lveA8brN82rTLoDHYh4BilpsZJXloFBM-nbbbbZGCYzQotvHbd0ZI9w7ayMnIuP5tTZAs8-Z_WgDzSNL98RWSlTzOE=w400-rw" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Pantop-D SR Capsule 15's</h5>
								<p className="card-text">

									Pantop-D SR Capsule 15's is composed of two medicines, namely: Domperidone and Pantoprazole. Domperidone is a prokinetic and anti-nausea agent that helps to treat indigestion and stomach pain. On the other hand, Pantoprazole is a proton pump inhibitor that reduces the excess stomach acid formation by blocking the actions of an enzyme (H+/K+ ATPase or gastric proton pump). Pantop-D SR Capsule 15's is a widely used medicine to treat peptic ulcers and gastroesophageal reflux disease (GERD)</p> </div>
							<h6>Uses of Pantop-D SR Capsule 15's</h6>
							<p>
								Gastroesophageal reflux disease (GERD), Heartburn due to hyperacidity</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

