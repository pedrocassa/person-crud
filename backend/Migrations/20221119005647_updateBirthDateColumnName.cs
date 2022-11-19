using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace desafiorsm.Migrations
{
    /// <inheritdoc />
    public partial class updateBirthDateColumnName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BirthDate",
                table: "People",
                newName: "birth_date");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "birth_date",
                table: "People",
                newName: "BirthDate");
        }
    }
}
