<%      // keep alive page
  final String success = "SERVER IS UP!";
  final String failure = "SERVER IS DOWN!";

  try {            
    out.println(success);
  } catch (Exception e) {
    out.println(failure);
  }
%>
