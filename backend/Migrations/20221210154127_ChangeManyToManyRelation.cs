using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace desafiorsm.Migrations
{
    /// <inheritdoc />
    public partial class ChangeManyToManyRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PersonAddress_Addresses_AddressId",
                table: "PersonAddress");

            migrationBuilder.DropForeignKey(
                name: "FK_PersonAddress_People_PersonId",
                table: "PersonAddress");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PersonAddress",
                table: "PersonAddress");

            migrationBuilder.DropIndex(
                name: "IX_PersonAddress_PersonId",
                table: "PersonAddress");

            migrationBuilder.RenameColumn(
                name: "PersonId",
                table: "PersonAddress",
                newName: "person_id");

            migrationBuilder.RenameColumn(
                name: "AddressId",
                table: "PersonAddress",
                newName: "address_id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PersonAddress",
                table: "PersonAddress",
                columns: new[] { "person_id", "address_id" });

            migrationBuilder.CreateIndex(
                name: "IX_PersonAddress_address_id",
                table: "PersonAddress",
                column: "address_id");

            migrationBuilder.AddForeignKey(
                name: "FK_PersonAddress_Addresses_address_id",
                table: "PersonAddress",
                column: "address_id",
                principalTable: "Addresses",
                principalColumn: "address_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PersonAddress_People_person_id",
                table: "PersonAddress",
                column: "person_id",
                principalTable: "People",
                principalColumn: "person_id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PersonAddress_Addresses_address_id",
                table: "PersonAddress");

            migrationBuilder.DropForeignKey(
                name: "FK_PersonAddress_People_person_id",
                table: "PersonAddress");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PersonAddress",
                table: "PersonAddress");

            migrationBuilder.DropIndex(
                name: "IX_PersonAddress_address_id",
                table: "PersonAddress");

            migrationBuilder.RenameColumn(
                name: "address_id",
                table: "PersonAddress",
                newName: "AddressId");

            migrationBuilder.RenameColumn(
                name: "person_id",
                table: "PersonAddress",
                newName: "PersonId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PersonAddress",
                table: "PersonAddress",
                columns: new[] { "AddressId", "PersonId" });

            migrationBuilder.CreateIndex(
                name: "IX_PersonAddress_PersonId",
                table: "PersonAddress",
                column: "PersonId");

            migrationBuilder.AddForeignKey(
                name: "FK_PersonAddress_Addresses_AddressId",
                table: "PersonAddress",
                column: "AddressId",
                principalTable: "Addresses",
                principalColumn: "address_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PersonAddress_People_PersonId",
                table: "PersonAddress",
                column: "PersonId",
                principalTable: "People",
                principalColumn: "person_id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
