import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1734450887294 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert data into Address Table
    await queryRunner.query(`
          INSERT INTO "address" (street, city, post_code, country, "userId") VALUES
            ('123 Main St', 'New York', '10001', 'USA', 1),
            ('456 Oak St', 'Los Angeles', '90001', 'USA', 2),
            ('789 Pine St', 'Chicago', '60601', 'USA', 3),
            ('101 Maple St', 'Houston', '77001', 'USA', 4),
            ('202 Elm St', 'Dallas', '75201', 'USA', 5),
            ('303 Birch St', 'Austin', '73301', 'USA', 6),
            ('404 Cedar St', 'San Francisco', '94101', 'USA', 7);
        `);

    // Insert data into User Table
    await queryRunner.query(`
          INSERT INTO "user" (name, email, role, password) VALUES
            ('John Doe', 'john@example.com', 'admin', 'password123'),
            ('Jane Smith', 'jane@example.com', 'user', 'password456'),
            ('Robert Johnson', 'robert@example.com', 'user', 'password789'),
            ('Emily Davis', 'emily@example.com', 'user', 'password123'),
            ('Michael Wilson', 'michael@example.com', 'admin', 'password456'),
            ('Sarah Lee', 'sarah@example.com', 'user', 'password789'),
            ('David Brown', 'david@example.com', 'user', 'password123');
        `);

    // Insert data into Invoice Table
    await queryRunner.query(`
          INSERT INTO "invoice" (created_at, payment_due, description, payment_terms, status, total, "userId") VALUES
            ('2021-08-18', '2021-08-19', 'Re-branding', 1, 'paid', 1800.9, 1),
            ('2021-08-21', '2021-09-20', 'Graphic Design', 30, 'pending', 556.0, 2),
            ('2021-09-24', '2021-10-01', 'Website Redesign', 7, 'paid', 14002.33, 3),
            ('2021-10-11', '2021-10-12', 'Logo Concept', 1, 'pending', 102.04, 4),
            ('2021-10-07', '2021-10-14', 'Re-branding', 7, 'pending', 4032.33, 5),
            ('2021-10-01', '2021-10-31', 'Landing Page Design', 30, 'pending', 6155.91, 6),
            ('2021-11-05', '2021-11-12', 'Logo Re-design', 7, 'draft', 3102.04, 7);
        `);

    // Insert data into Item Table
    await queryRunner.query(`
          INSERT INTO "item" (name, quantity, price, total, "invoiceId", "userId") VALUES
            ('Item 1', 2, 900.45, 1800.9, 1, 1),
            ('Item 2', 10, 55.6, 556.0, 2, 2),
            ('Item 3', 4, 3500.58, 14002.33, 3, 3),
            ('Item 4', 1, 102.04, 102.04, 4, 4),
            ('Item 5', 20, 201.62, 4032.33, 5, 5),
            ('Item 6', 15, 410.39, 6155.91, 6, 6),
            ('Item 7', 3, 1034.01, 3102.04, 7, 7);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Data rollback (optional, in case of undoing the migration)
    await queryRunner.query('DELETE FROM "item";');
    await queryRunner.query('DELETE FROM "invoice";');
    await queryRunner.query('DELETE FROM "address";');
    await queryRunner.query('DELETE FROM "user";');
  }
}
