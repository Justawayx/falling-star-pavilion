f = open('Command descriptions - Sheet1.tsv', 'r')

command_desc_dict = {}

header = f.readline()
for line in f:
	command, status, desc, detailed_desc = line.split('\t')
	detailed_desc = detailed_desc.strip()
	if status == '':
		command_desc_dict[command] = desc

command_html_format = '''<div id="%s" class="special-block">
  <div class="command-name"><h3>/%s</h3></div>
  <p>%s</p>
</div>'''

for command in sorted(command_desc_dict.keys()):
	print(command_html_format % (command, command, command_desc_dict[command]))