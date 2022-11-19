using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace desafiorsm.Migrations
{
    /// <inheritdoc />
    public partial class updateTablesColumnsName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "People",
                newName: "fullname");

            migrationBuilder.RenameColumn(
                name: "Uf",
                table: "Addresses",
                newName: "uf");

            migrationBuilder.RenameColumn(
                name: "Street",
                table: "Addresses",
                newName: "street");

            migrationBuilder.RenameColumn(
                name: "Number",
                table: "Addresses",
                newName: "number");

            migrationBuilder.RenameColumn(
                name: "Neighborhood",
                table: "Addresses",
                newName: "neighborhood");

            migrationBuilder.RenameColumn(
                name: "Complement",
                table: "Addresses",
                newName: "complement");

            migrationBuilder.RenameColumn(
                name: "City",
                table: "Addresses",
                newName: "city");

            migrationBuilder.AlterColumn<string>(
                name: "complement",
                table: "Addresses",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "fullname",
                table: "People",
                newName: "FullName");

            migrationBuilder.RenameColumn(
                name: "uf",
                table: "Addresses",
                newName: "Uf");

            migrationBuilder.RenameColumn(
                name: "street",
                table: "Addresses",
                newName: "Street");

            migrationBuilder.RenameColumn(
                name: "number",
                table: "Addresses",
                newName: "Number");

            migrationBuilder.RenameColumn(
                name: "neighborhood",
                table: "Addresses",
                newName: "Neighborhood");

            migrationBuilder.RenameColumn(
                name: "complement",
                table: "Addresses",
                newName: "Complement");

            migrationBuilder.RenameColumn(
                name: "city",
                table: "Addresses",
                newName: "City");

            migrationBuilder.AlterColumn<string>(
                name: "Complement",
                table: "Addresses",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);
        }
    }
}
