import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "books" })
export class BooksEntity {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'book_id' })
    bookId: string;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'series' })
    series: string;

    @Column({ name: 'author' })
    author: string;

    @Column({ name: 'rating' })
    rating: number;

    @Column({ name: 'description' })
    description: string;

    @Column({ name: 'language' })
    language: string;

    @Column({ name: 'isbn' })
    isbn: string;

    @Column({ name: 'genres' })
    genre: string;

    @Column({ name: 'characters', default: 'NA' })
    characters: string;

    @Column({ name: 'book_format', default: true })
    bookFormat: string;

    @Column({ name: 'edition', default: true })
    edition: string;

    @Column({ name: 'pages', default: true })
    pages: string;

    @Column({ name: 'publisher', default: true })
    publisher: string;

    @Column({ name: 'publish_date', default: true })
    publishDate: string;

    @Column({ name: 'first_publish_date', default: true })
    firstPublishDate: string;

    @Column({ name: 'awards', default: true })
    awards: string;

    @Column({ name: 'num_ratings', default: true })
    numRatings: number;

    @Column({ name: 'ratings_by_stars', default: true })
    ratingsByStars: string;

    @Column({ name: 'liked_percent', default: true })
    likedPercent: number;

    @Column({ name: 'setting', default: true })
    setting: string;

    @Column({ name: 'cover_img', default: true })
    coverImg: string;

    @Column({ name: 'bbe_score', default: true })
    bbeScore: number;

    @Column({ name: 'bbe_votes', default: true })
    bbeVotes: number;

    @Column({ name: 'price', default: true })
    price: string;
}
