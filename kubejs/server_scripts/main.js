// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!
  
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.
    event.shaped(
        Item.of('minecraft:glow_lichen', 4), // arg 1: output
        [
          'AAA',
          'ABA', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: '#minecraft:saplings',
          B: 'minecraft:dirt'  //arg 3: the mapping object
        }
      )
    
    event.replaceInput(
        { id: 'minecraft:netherite_upgrade_smithing_template' },
        'minecraft:netherite_upgrade_smithing_template',
        'minecraft:rib_armor_trim_smithing_template'
      )   
    event.replaceInput(
        { id: 'minecraft:netherite_upgrade_smithing_template' },
        'minecraft:netherrack',
        'minecraft:netherite_scrap'
      )   
    event.shapeless(
      Item.of('minecraft:kelp', 1),
      [
        'minecraft:vine',
        'minecraft:water_bucket'
      ]
    )

    event.recipes.occultism.spirit_fire('occultism:otherworld_log', 'minecraft:oak_log')
    event.recipes.occultism.spirit_fire('occultism:raw_iesnium', 'minecraft:diamond')
	  event.remove({ id: 'projecte:conversions/diamond_to_emerald' })
	  event.remove({ id: 'projecte:conversions/emerald_to_diamond' })
    event.remove({ id: 'pipez:item_pipe' })
    event.remove({ id: 'pipez:fluid_pipe' })
    event.remove({ id: 'pipez:universal_pipe' })
    }
)