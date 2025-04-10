'use client';

import { Yard, Area, Section, Block, Text, Wrapper, Group } from "@/libs";
import BarAbout from "@/assets/Images/aboutus_vqpcn8.webp";
import Image from "next/image";
import Phuket from "@/assets/Images/phuket_utqmlt.webp";
import Sydney from "@/assets/Images/sydney-opera-house-near-body-of-water-during-daytime-1_fbgqyc.webp";
import japan from "@/assets/Images/japan-tokyo_wpvxra.webp";
import Moscow from "@/assets/Images/moscow_jr5bb4.webp";
import Singapore from "@/assets/Images/singapore_qihqqs_ehracs.webp";
import styles from "./styles.module.scss";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
// Remove unused imports since they're not being used in this component

export interface CategoryProps {
  _id: string;
  categoryName: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const About = () => {
  return (
    <div className={styles.container}>
      <Yard className={styles.nav}>
        <Image src={BarAbout} alt="bar-image" className={styles.img_BarAbout} />
        <Wrapper className={styles.BarTitleWrapper}>
          <Text className={styles.BarText1}>
            About Us
          </Text>
          <Text className={styles.BarText2}>
            Discover Our Journey and Passion for Travel
          </Text>
        </Wrapper>
      </Yard>

      <Yard className={styles.content}>
        <Area className={styles.area_left}>
          <Section className={styles.section_top}>
            <Block className={styles.block_content}>
              <Wrapper className={styles.content_wrapper}>
                <Text className={styles.title_text}>
                  <span className={styles.char_text}>O</span>ur journey began with a passion for discovery and a love for the rich tapestry of cultures that define our world. Founded in 2010, Next Travel was born out of a desire to offer unique, curated travel experiences that go beyond the typical tourist path.
                </Text>
              </Wrapper>
            </Block>
            <Block className={styles.block_content}>
              <Wrapper className={styles.content_wrapper}>
                <Text className={styles.title_text}>
                  Our dedicated team of travel experts works tirelessly to craft itineraries that inspire exploration and create lasting memories. Whether you're seeking hidden local gems or iconic global landmarks, we believe that every trip is an opportunity to learn, grow, and connect with the world around us.
                </Text>
              </Wrapper>
            </Block>
          </Section>
          <Section className={styles.section_bottom}>
            <div className={styles.row_1}>
              <div className={styles.colum_2}>
                <Image src={Sydney} alt="image" className={styles.image} />
              </div>
              <div className={styles.colum_1}>
                <Image src={japan} alt="image" className={styles.image} />
              </div>
            </div>
            <div className={styles.row_2}>
              <div className={styles.colum_1}>
                <Image src={Moscow} alt="image" className={styles.image} />
              </div>
              <div className={styles.colum_1}>
                <Image src={Singapore} alt="image" className={styles.image} />
              </div>
              <div className={styles.colum_1}>
                <Image src={Phuket} alt="image" className={styles.image} />
              </div>
            </div>
          </Section>
        </Area>

        <Area className={styles.area_right}>
          <Section className={styles.section_top}>
            <Block className={styles.contact_block}>
              <div className={styles.row}>
                <div className={styles.icon_contact}>
                  <EnvironmentOutlined />
                </div>
                <Group className={styles.text_group}>
                  <Text className={styles.text_title}>ADDRESS</Text>
                  <Text className={styles.text_content}>
                    15 Nguyen Van Bao - Ho Chi Minh - Viet Nam
                  </Text>
                </Group>
              </div>

              <div className={styles.row}>
                <div className={styles.icon_contact}>
                  <PhoneOutlined />
                </div>
                <Group className={styles.text_group}>
                  <Text className={styles.text_title}>PHONE</Text>
                  <Text className={styles.text_content}>
                    0987654321
                  </Text>
                </Group>
              </div>

              <div className={styles.row}>
                <div className={styles.icon_contact}>
                  <MailOutlined />
                </div>
                <Group className={styles.text_group}>
                  <Text className={styles.text_title}>EMAIL</Text>
                  <Text className={styles.text_content}>
                    admin@gmail.com
                  </Text>
                </Group>
              </div>
            </Block>
          </Section>

          <Section className={styles.section_bottom}>
            <div className={styles.map_wrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6955220337315!2d106.68456297480726!3d10.832849089326904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e1f3d96399%3A0xd172b6b57de07449!2zMTUgTmd1eeG7hW4gVmFuIELhuqNvLCBHaWFuZyBUw6JtLCBCw6xjaCBUaOG7pywgSOG7kyBDaMOtbmggMTI3MDAw!5e0!3m2!1svi!2s!4v1710212643321!5m2!1svi!2s"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Section>
        </Area>
      </Yard>
    </div >
  );
};

export default About;
