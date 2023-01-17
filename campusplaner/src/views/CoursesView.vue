<template>
  <div class="about">
    <h1>Deine Kursübersicht</h1>
    <div class="listbox-area">
  <div>
	<input type="search" id="search" placeholder="Suche…">
	
    <ul id="ss_elem_list"
        tabindex="0"
        role="listbox"
        aria-labelledby="ss_elem">
        <v-card v-for ="courses in getStudenCourses()">
          <li id="ss_elem_Np" role="option">
        {{getStudenCourses()}}
      </li>
        </v-card>
      
    </ul>
  </div>
</div>
  </div>
</template>

<style>.listbox-area {
    padding: 15px;
    border: 1px solid #aaa;
    border-radius: 19px;
    background: #eee;
    margin-right: 50%
}

[role="listbox"] {
  min-height: 18em;
  border: 1px solid #aaa;
  background: white;
}

[role="listbox"]#ss_elem_list {
  position: relative;
  max-height: 18em;
  overflow-y: auto;
}

[role="listbox"] + *,
.listbox-label + * {
  margin-top: 1em;
}

[role="group"] {
  margin: 0;
  padding: 0;
}

[role="group"] > [role="presentation"] {
  display: block;
  margin: 0;
  padding: 0 0.5em;
  font-weight: bold;
  line-height: 2;
  background-color: #ccc;
}

[role="option"] {
  position: relative;
  display: block;
  padding: 0 1em 0 1.5em;
  line-height: 1.8em;
}

[role="option"].focused {
  background: #bde4ff;
}

[role="option"][aria-selected="true"]::before {
  position: absolute;
  left: 0.5em;
  content: "✓";
}

button[aria-haspopup="listbox"] {
  position: relative;
  padding: 5px 10px;
  width: 150px;
  border-radius: 0;
  text-align: left;
}

button[aria-haspopup="listbox"]::after {
  position: absolute;
  right: 5px;
  top: 10px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-top-color: currentcolor;
  border-bottom: 0;
  content: "";
}

button[aria-haspopup="listbox"][aria-expanded="true"]::after {
  position: absolute;
  right: 5px;
  top: 10px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-top: 0;
  border-bottom-color: currentcolor;
  content: "";
}

button[aria-haspopup="listbox"] + [role="listbox"] {
  position: absolute;
  margin: 0;
  width: 9.5em;
  max-height: 10em;
  border-top: 0;
  overflow-y: auto;
}

[role="toolbar"] {
  display: flex;
}

[role="toolbar"] > * {
  border: 1px solid #aaa;
  background: #ccc;
}

[role="toolbar"] > [aria-disabled="false"]:focus {
  background-color: #eee;
}

button {
  font-size: inherit;
}

button[aria-disabled="true"] {
  opacity: 0.5;
}

.move-right-btn::after {
  content: " →";
}

.move-left-btn::before {
  content: "← ";
}

.annotate {
  color: #366ed4;
  font-style: italic;
}

.hidden {
  display: none;
}

.offscreen {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  font-size: 14px;
  white-space: nowrap;
}</style>

<script>
import store from "../store";
export default {
    methods: {
    
         getStudenCourses() {
            return store.getters.getStudenCourses;
         },
      
       
    }
}

</script>
