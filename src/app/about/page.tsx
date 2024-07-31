import styles from "./page.module.css";

const About = () => {
  return (
    <>
      <section className={styles.section}>
        <h2>Welcome to Quote Generator!</h2>
        <p>
          At Quote Generator, our mission is to provide you with a delightful
          and engaging way to discover inspiring, thought-provoking, and
          memorable quotes from a variety of sources. Whether you&apos;re a fan
          of movies, books, cartoons, TV speeches, or simply looking for wisdom
          from specific authors, we’ve got you covered!
        </p>
      </section>
      <section className={styles.section}>
        <h2>Our Purpose</h2>
        <p>
          In a world where words have the power to uplift, entertain, and
          provoke thought, we wanted to create a tool that brings the magic of
          quotes to your fingertips. Our platform allows you to:
        </p>
        <ul className={styles.ul}>
          <li>
            Generate Random Quotes: Get a surprise quote whenever you need a
            boost of inspiration or a moment of reflection.
          </li>
          <li>
            Filter by Source: Choose quotes from movies, TV series, cartoons,
            books, or speeches.
          </li>
          <li>
            Customize Your Search: Enter specific titles or authors to find
            exactly what you’re looking for.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>How It Works</h2>
        <ol className={styles.ol}>
          <li>
            Select Your Language: Choose the language in which you&apos;d like
            to see your quotes.
          </li>
          <li>
            Choose the Source Type: Pick from movies, serials, cartoons, books,
            or speeches.
          </li>
          <li>
            Refine Your Search: For more specific results, enter the title of a
            movie, book, or cartoon, or the name of an author for speeches.
          </li>
          <li>
            Generate or Search: Click on “Generate Quote” to get a quote based
            on your criteria, or use the “Get Random Quote” button to discover
            something new.
          </li>
        </ol>
        <p>
          Our user-friendly interface and powerful search capabilities are
          designed to make it easy for you to find and enjoy quotes that
          resonate with you.
        </p>
      </section>
    </>
  );
};

export default About;
