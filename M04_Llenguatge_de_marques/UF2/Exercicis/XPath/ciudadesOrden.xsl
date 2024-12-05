<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Ciudades</title>
                <link rel="stylesheet" type="text/css" href="style.css"/>
            </head>
            <body>
                <h1>Lista de Ciudades</h1>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Provincia</th>
                        <th>Habitantes</th>
                    </tr>
                    <xsl:for-each select="//ciudad">
                        <xsl:sort select="habitantes" data-type="number" order="descending"/>
                        <tr>
                            <td>
                                <xsl:value-of select="nombre"/>
                            </td>
                            <td>
                                <xsl:value-of select="provincia"/>
                            </td>
                            <td>
                                <xsl:value-of select="habitantes"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>